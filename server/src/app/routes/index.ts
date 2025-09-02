import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";

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
];

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})


export default router