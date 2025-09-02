import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { ModuleController } from "./module.controller";

const router = Router();


router.post("/create",
    checkAuth(Role.ADMIN),
    ModuleController.createModule
)

export const ModuleRoutes = router