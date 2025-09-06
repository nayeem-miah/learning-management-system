"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const progress_service_1 = require("./progress.service");
const startCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, lectureId } = req.body;
    const result = yield progress_service_1.progressService.startCourse(userId, lectureId);
    res.status(201).json({
        statusCode: 201,
        success: true,
        message: "Course started successfully & first lecture unlocked",
        data: result.data
    });
}));
exports.ProgressController = {
    startCourse
};
