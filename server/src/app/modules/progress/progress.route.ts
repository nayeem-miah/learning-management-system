import { Router } from "express";
import { ProgressController } from "./progress.controller";

const router = Router();

router.post("/start", ProgressController.startCourse);



export const ProgressRoutes = router;

