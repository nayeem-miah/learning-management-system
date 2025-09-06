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
exports.progressService = void 0;
const lecture_model_1 = require("../lecture/lecture.model");
const module_model_1 = require("../module/module.model");
const progress_model_1 = require("./progress.model");
const startCourse = (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    let progress = yield progress_model_1.Progress.findOne({ userId, courseId });
    if (!progress) {
        const firstModule = yield module_model_1.Module.findOne({ course: courseId })
            .sort("moduleNumber");
        if (!firstModule)
            throw new Error("No module found");
        const firstLecture = yield lecture_model_1.Lecture.findOne({ module: firstModule._id })
            .sort("lectureNumber");
        if (!firstLecture)
            throw new Error("No lecture found");
        progress = yield progress_model_1.Progress.create({
            userId,
            courseId,
            completedLectures: [],
            unlockedLectures: [firstLecture._id],
        });
    }
    return { data: progress };
});
exports.progressService = {
    startCourse,
};
