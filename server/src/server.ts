import mongoose from "mongoose";
import { Server } from "http"
import { envVars } from "./app/config/env";
import app from "./app";
import { seedAdmin } from "./app/utils/seedAdmin";
let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Connected to DB!");

        server = app.listen(envVars.PORT, () => {
            console.log(`Server is listening to port http://localhost:${envVars.PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
};

(async () => {
    await startServer()
    await seedAdmin()
})()