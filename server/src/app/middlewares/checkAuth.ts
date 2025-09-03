import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env";
import { User } from "../modules/user/user.model";

export const checkAuth = (...AuthRoutes: string[]) =>
    async (req: Request, res: Response, next: NextFunction) => {

        try {
            const accessToken = req.headers.authorization || req.cookies.accessToken;
            // console.log(accessToken);
            if (!accessToken) {
                throw new Error("access token not found");
            }

            const verifyToken = jwt.verify(accessToken, envVars.JWT_SECRET) as JwtPayload

            const isUserExits = await User.findOne({ email: verifyToken.email })

            if (!isUserExits) {
                throw new Error("user not found")
            }

            if (!AuthRoutes.includes(verifyToken.role)) {
                throw new Error("you are not permeated to view this route !")
            }

            req.user = verifyToken;
            next()

        } catch (error) {
            next(error)
        }
    }