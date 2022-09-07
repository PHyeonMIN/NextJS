import {connectDatabase, insertDocument} from '../../helpers/db-util'

const handler = async (req, res) => {
    if(req.method === 'POST'){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: 'Invalid email address.'});    // 사용자 입력값이 유효하지 않을 때를 나타내는 상태코드
            return ;
        }

        let client;

        try{
            client = await connectDatabase();
        }catch (error){
            res.status(500).json({message: 'Connecting to the database failed!'});
            return;
        }

        try{
            await insertDocument(client, 'newsletter',{email:userEmail});
            client.close();
        }catch (error){
            res.status(500).json({message: 'Inserting data failed!'});
            return;
        }

        res.status(201).json({message: 'Sign up!'})
    }
};

export default handler;