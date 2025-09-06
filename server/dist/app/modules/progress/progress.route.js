"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressRoutes = void 0;
const express_1 = require("express");
const progress_controller_1 = require("./progress.controller");
const router = (0, express_1.Router)();
router.post("/start", progress_controller_1.ProgressController.startCourse);
exports.ProgressRoutes = router;
