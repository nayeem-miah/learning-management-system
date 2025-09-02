import dotenv from "dotenv"

dotenv.config();

interface IEnvConfig {
    PORT: string;
    DB_URL: string;
};

const localVariables = (): IEnvConfig => {
    const requiredVariable: string[] = ["PORT", "DB_URL"];

    requiredVariable.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`)
        }
    })
    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
    }
};

export const envVars = localVariables();