const handler = (req, res) => {
    if(req.method === 'POST'){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: 'Invalid email address.'});    // 사용자 입력값이 유효하지 않을 때를 나타내는 상태코드
            return ;
        }

        console.log(userEmail);
        res.status(201).json({message: 'Sign up!'})
    }
};

export default handler;