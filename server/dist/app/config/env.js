"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
const localVariables = () => {
    const requiredVariable = ["PORT", "DB_URL", "NODE_ENV", "BCRYPT_SLOT_ROUND", "JWT_SECRET", "JWT_EXPIRE", "ADMIN_EMAIL", "ADMIN_PASS"];
    requiredVariable.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    });
    return {
        PORT: process.env.PORT,
        DB_URL: process.env.DB_URL,
        NODE_ENV: process.env.NODE_ENV,
        BCRYPT_SLOT_ROUND: process.env.BCRYPT_SLOT_ROUND,
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_EXPIRE: process.env.JWT_EXPIRE,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASS: process.env.ADMIN_PASS,
    };
};
exports.envVars = localVariables();
