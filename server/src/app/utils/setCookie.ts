import { Response } from "express"

interface IAuthToken {
    accessToken: string
};




export const AuthToken = (res: Response, userInfo: IAuthToken) => {

    if (userInfo.accessToken) {
        res.cookie("accessToken", userInfo.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
        });
    }


}