import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { ModuleController } from "./module.controller";

const router = Router();


router.post("/create",
    checkAuth(Role.ADMIN),
    ModuleController.createModule
)
router.get("/",
    // checkAuth(Role.ADMIN),
    ModuleController.getAllModule
)
router.get("/:course",
    checkAuth(...Object.values(Role)),
    ModuleController.courseIdByGetModule
)
router.get("/single/:id",
    checkAuth(...Object.values(Role)),
    ModuleController.getSingleModule
)
router.patch("/update/:id",
    checkAuth(Role.ADMIN),
    ModuleController.updateModule
)
router.delete("/delete/:id",
    checkAuth(Role.ADMIN),
    ModuleController.deleteModule
);


export const ModuleRoutes = router