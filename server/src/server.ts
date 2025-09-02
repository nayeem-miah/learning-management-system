import mongoose from "mongoose";
import { Server } from "http"
import { envVars } from "./app/config/env";
import app from "./app";
let server: Server;

const stateServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL);
        console.log("Connected to DB!");

        server = app.listen(envVars.PORT, () => {
            console.log(`Server is listening to port http://localhost:${envVars.PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
};

stateServer();