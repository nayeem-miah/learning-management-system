import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { LectureController } from "./lecture.controller";

const router = Router();


router.post("/create",
    checkAuth(Role.ADMIN),
    LectureController.createLecture
)
router.get("/",
    checkAuth(Role.ADMIN),
    LectureController.getAllLecture
)
router.get("/:module",
    checkAuth(...Object.values(Role)),
    LectureController.moduleIdByGetLecture
)
router.patch("/update/:id",
    checkAuth(Role.ADMIN),
    LectureController.updateLecture
)
router.delete("/delete/:id",
    checkAuth(Role.ADMIN),
    LectureController.deleteLecture
);


export const LectureRoutes = router