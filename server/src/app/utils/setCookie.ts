import { Response } from "express"
import { envVars } from "../config/env";

interface IAuthToken {
    accessToken: string
};




export const AuthToken = (res: Response, userInfo: IAuthToken) => {

    if (userInfo.accessToken) {
        res.cookie("accessToken", userInfo.accessToken, {
            httpOnly: true,
            secure: envVars.NODE_ENV === "production",
            sameSite: envVars.NODE_ENV === "production" ? "none" : "lax"
        });
    }


}