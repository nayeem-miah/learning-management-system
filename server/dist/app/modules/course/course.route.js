"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../user/user.interface");
const course_controller_1 = require("./course.controller");
const router = (0, express_1.Router)();
router.post("/create", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), course_controller_1.CourseController.createCourse);
router.get("/", 
// checkAuth(Role.ADMIN),
course_controller_1.CourseController.getAllCourse);
router.get("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), course_controller_1.CourseController.getSingleCourse);
router.patch("/update/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), course_controller_1.CourseController.updatedCourse);
router.delete("/delete/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), course_controller_1.CourseController.deletedCourse);
exports.CourseRoutes = router;
