import { Router } from "express";
import { UserController } from "./user.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./user.interface";

const router = Router();

router.post("/register", UserController.createUser);

router.get("/all-users",
    checkAuth(Role.ADMIN),
    UserController.getAll
)
router.get("/me",
    checkAuth(...Object.values(Role)),
    UserController.getMe
)

export const UserRouter = router;