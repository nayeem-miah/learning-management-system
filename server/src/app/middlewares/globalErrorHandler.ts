import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import { TErrorSource } from "../interfaces/error.types";

export const globalErrorHandler = (err: any, re: Request, res: Response, next: NextFunction) => {

    if (envVars.NODE_ENV) {
        console.log(err);
    }

    let errorSources: TErrorSource[] = [];

    let statusCode = 500;
    let message = `something went wrong !! `


    res.status(500).json({
        success: false,
        message,
        errorSources,
        err: envVars.NODE_ENV === "development" ? err : null,
        stack: envVars.NODE_ENV === "development" ? err.stack : null
    })

}