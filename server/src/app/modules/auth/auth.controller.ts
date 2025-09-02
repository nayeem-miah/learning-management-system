import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthService } from "./auth.service";
import { AuthToken } from "../../utils/setCookie";

const credentialLogin = catchAsync(async (req: Request, res: Response) => {
    const userInfo = await AuthService.credentialLogin(req.body);

    //  token set cookie
    AuthToken(res, userInfo)

    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "User login success",
        data: userInfo
    })

})
const logout = catchAsync(async (req: Request, res: Response) => {
    // clear cookie jwt token
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })

    res.status(201).json({
        success: true,
        statusCode: 200,
        message: "User logout success",
        data: null
    })
})


export const AuthController = {
    credentialLogin,
    logout
}