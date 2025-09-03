import { createUserToken } from "../../utils/useToken";
import { IUser } from "../user/user.interface"
import { User } from "../user/user.model";
import bcrypt from 'bcrypt';

const credentialLogin = async (payload: Partial<IUser>) => {
    const { email, password } = payload;

    const isExit = await User.findOne({ email })

    if (!isExit) {
        throw new Error("user not found ")
    };

    const isPasswordMatch = await bcrypt.compare(password as string, isExit.password);

    if (!isPasswordMatch) {
        throw new Error("Invalid password!")
    }

    // generate token
    const generateToken = createUserToken(isExit)

    const { password: pass, ...rest } = isExit.toObject()

    return {
        accessToken: generateToken,
        user: rest
    }
}


export const AuthService = {
    credentialLogin
}