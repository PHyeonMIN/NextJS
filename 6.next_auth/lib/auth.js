import {hash} from 'bcryptjs';

export const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12); // 두번째 인수에는 솔트(Salt)의 라운드(Round) 값을 정한다. - 암호화 정도를 결정하는 값
    return hashedPassword;
}