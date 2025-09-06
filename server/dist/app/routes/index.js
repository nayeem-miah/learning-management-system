"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const course_route_1 = require("../modules/course/course.route");
const module_route_1 = require("../modules/module/module.route");
const lecture_route_1 = require("../modules/lecture/lecture.route");
const progress_route_1 = require("../modules/progress/progress.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRouter
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes
    },
    {
        path: "/course",
        route: course_route_1.CourseRoutes
    },
    {
        path: "/module",
        route: module_route_1.ModuleRoutes
    },
    {
        path: "/lecture",
        route: lecture_route_1.LectureRoutes
    },
    {
        path: "/progress",
        route: progress_route_1.ProgressRoutes
    },
];
moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
});
exports.default = router;
