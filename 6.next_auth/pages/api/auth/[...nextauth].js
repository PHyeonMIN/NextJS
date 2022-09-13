import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {connectToDatabase} from "../../../lib/db";
import {verifyPassword} from "../../../lib/auth";

export default NextAuth({
    // 인증된 사용자에 대한 세션을 관리하는 방법을 구성할 수 있는 객체
    session:{
        // 데이터 베이스를 지정하지 않으면 자동으로 true 설정
        jwt:true
    },
    providers: [
        // 고유의 크리덴셜을 제공
        Providers.Credentials({
            // NextAuth가 우리 대신 로그인 양식을 만들어줌
            // credentials: {}

            // 들어오는 로그인 요청을 Next.js가 수신할 때 호출해주는 메서드
            // 크리덴셜이 유효한지 확인하고 아니라면 사용자에게 알림
            async authorize(credentials, req) {
                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');
                const user = await usersCollection.findOne({email: credentials.email});
                if(!user){
                    client.close();
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if(!isValid){
                    client.close();
                    throw new Error('Could not log you in');
                }
                client.close();
                return {email: user.email};
            }
        }),
    ]
});