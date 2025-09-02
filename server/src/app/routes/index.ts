import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";

const router = Router();

interface IModuleRoute {
    path: string;
    route: any;
}

const moduleRoutes: IModuleRoute[] = [
    {
        path: "/user",
        route: UserRouter
    }
];

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})


export default router