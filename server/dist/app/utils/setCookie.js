"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthToken = void 0;
;
// AuthToken.ts
const AuthToken = (res, userInfo) => {
    if (userInfo.accessToken) {
        res.cookie("accessToken", userInfo.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
    }
};
exports.AuthToken = AuthToken;
