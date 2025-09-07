"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthToken = void 0;
const env_1 = require("../config/env");
;
const AuthToken = (res, userInfo) => {
    if (userInfo.accessToken) {
        res.cookie("accessToken", userInfo.accessToken, {
            httpOnly: true,
            secure: env_1.envVars.NODE_ENV === "production",
            sameSite: env_1.envVars.NODE_ENV === "production" ? "none" : "lax"
        });
    }
};
exports.AuthToken = AuthToken;
