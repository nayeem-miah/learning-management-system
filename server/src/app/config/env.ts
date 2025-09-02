import dotenv from "dotenv"

dotenv.config();

interface IEnvConfig {
    PORT: string;
    DB_URL: string;
    NODE_ENV: "development" | "production";
    BCRYPT_SLOT_ROUND: string;
    JWT_SECRET: string;
    JWT_EXPIRE: string;
    ADMIN_EMAIL: string;
    ADMIN_PASS: string;
};

const localVariables = (): IEnvConfig => {
    const requiredVariable: string[] = ["PORT", "DB_URL", "NODE_ENV", "BCRYPT_SLOT_ROUND", "JWT_SECRET", "JWT_EXPIRE", "ADMIN_EMAIL", "ADMIN_PASS"];

    requiredVariable.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`)
        }
    })
    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_ENV: process.env.NODE_ENV as "development" | "production",
        BCRYPT_SLOT_ROUND: process.env.BCRYPT_SLOT_ROUND as string,
        JWT_SECRET: process.env.JWT_SECRET as string,
        JWT_EXPIRE: process.env.JWT_EXPIRE as string,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
        ADMIN_PASS: process.env.ADMIN_PASS as string,
    }
};

export const envVars = localVariables();