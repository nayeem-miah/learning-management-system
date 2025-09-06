"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../user/user.interface");
const module_controller_1 = require("./module.controller");
const router = (0, express_1.Router)();
router.post("/create", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), module_controller_1.ModuleController.createModule);
router.get("/", 
// checkAuth(Role.ADMIN),
module_controller_1.ModuleController.getAllModule);
router.get("/:course", (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), module_controller_1.ModuleController.courseIdByGetModule);
router.get("/single/:id", (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), module_controller_1.ModuleController.getSingleModule);
router.patch("/update/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), module_controller_1.ModuleController.updateModule);
router.delete("/delete/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), module_controller_1.ModuleController.deleteModule);
exports.ModuleRoutes = router;
