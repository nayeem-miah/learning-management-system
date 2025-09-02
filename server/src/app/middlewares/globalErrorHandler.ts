import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import { TErrorSource } from "../interfaces/error.types";
import { handleDuplicate } from "../helpers/handleDuplicateError";

export const globalErrorHandler = (err: any, re: Request, res: Response, next: NextFunction) => {

    if (envVars.NODE_ENV) {
        console.log(err);
    }

    let errorSources: TErrorSource[] = [];

    let statusCode = 500;
    let message = `something went wrong !! `

    if (err.code === 11000) {
        const simplifyError = handleDuplicate(err)
        statusCode = simplifyError.statusCode;
        message = simplifyError.message
    }

    else if (err instanceof Error) {
        statusCode = 500;
        message = err.message
    }


    res.status(500).json({
        success: false,
        message,
        errorSources,
        err: envVars.NODE_ENV === "development" ? err : null,
        stack: envVars.NODE_ENV === "development" ? err.stack : null
    })

}