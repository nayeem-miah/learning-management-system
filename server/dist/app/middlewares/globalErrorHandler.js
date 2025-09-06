"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const env_1 = require("../config/env");
const handleDuplicateError_1 = require("../helpers/handleDuplicateError");
const globalErrorHandler = (err, re, res, next) => {
    if (env_1.envVars.NODE_ENV) {
        console.log(err);
    }
    let errorSources = [];
    let statusCode = 500;
    let message = `something went wrong !! `;
    if (err.code === 11000) {
        const simplifyError = (0, handleDuplicateError_1.handleDuplicate)(err);
        statusCode = simplifyError.statusCode;
        message = simplifyError.message;
    }
    else if (err instanceof Error) {
        statusCode = 500;
        message = err.message;
    }
    res.status(500).json({
        success: false,
        message,
        errorSources,
        err: env_1.envVars.NODE_ENV === "development" ? err : null,
        stack: env_1.envVars.NODE_ENV === "development" ? err.stack : null
    });
};
exports.globalErrorHandler = globalErrorHandler;
