import { Response } from "express"
import { envVars } from "../config/env";

interface IAuthToken {
    accessToken: string
};




// AuthToken.ts
export const AuthToken = (res: Response, userInfo: IAuthToken) => {
    if (userInfo.accessToken) {
        res.cookie("accessToken", userInfo.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
    }
};
