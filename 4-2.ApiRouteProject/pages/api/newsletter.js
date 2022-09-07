import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if(req.method === 'POST'){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: 'Invalid email address.'});    // 사용자 입력값이 유효하지 않을 때를 나타내는 상태코드
            return ;
        }

        const client = await MongoClient.connect("mongodb+srv://user_park:RRX7aSGEKsLsGll6@cluster0.jyvgm.mongodb.net/newsletter?retryWrites=true&w=majority");
        const db = client.db();
        await db.collection('emails').insertOne({email: userEmail});
        client.close();

        res.status(201).json({message: 'Sign up!'})
    }
};

export default handler;