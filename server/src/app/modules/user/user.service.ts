import { envVars } from "../../config/env";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt"

const createUser = async (payload: Partial<IUser>) => {
    const { email, password, ...rest } = payload;

    const isExist = await User.findOne({ email });

    if (isExist) {
        throw new Error("user already exists")
    }

    const hashPassword = await bcrypt.hash(password as string, Number(envVars.BCRYPT_SLOT_ROUND))
    // console.log(hashPassword);

    const result = await User.create({
        email: email,
        password: hashPassword,
        ...rest,

    })
    return {
        data: result
    }
};




export const UserService = {
    createUser
}