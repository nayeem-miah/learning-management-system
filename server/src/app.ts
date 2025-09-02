import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./app/middlewares/notFount";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Welcome to learning management backend"
    })
});



//  global error handler
app.use(globalErrorHandler);

//  not found
app.use(notFound);
export default app;
