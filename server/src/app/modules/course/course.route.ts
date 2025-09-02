import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { CourseController } from "./course.controller";

const router = Router();

router.post("/create",
    checkAuth(Role.ADMIN),
    CourseController.createCourse
);
router.get("/",
    checkAuth(Role.ADMIN),
    CourseController.getAllCourse
);
router.get("/:id",
    checkAuth(Role.ADMIN),
    CourseController.getSingleCourse
);
router.patch("/update/:id",
    checkAuth(Role.ADMIN),
    CourseController.updatedCourse
);
router.delete("/delete/:id",
    checkAuth(Role.ADMIN),
    CourseController.deletedCourse
);


export const CourseRoutes = router;