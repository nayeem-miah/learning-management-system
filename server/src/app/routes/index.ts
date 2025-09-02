import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { CourseRoutes } from "../modules/course/course.route";
import { ModuleRoutes } from "../modules/module/module.route";

const router = Router();

interface IModuleRoute {
    path: string;
    route: any;
}

const moduleRoutes: IModuleRoute[] = [
    {
        path: "/user",
        route: UserRouter
    },
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/course",
        route: CourseRoutes
    },
    {
        path: "/module",
        route: ModuleRoutes
    },
];

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})


export default router