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
exports.lectureService = void 0;
const lecture_model_1 = require("./lecture.model");
const createLecture = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const countLecture = yield lecture_model_1.Lecture.countDocuments({ module: payload.module });
    const newLecture = Object.assign(Object.assign({}, payload), { lectureNumber: countLecture + 1 });
    const lecture = yield lecture_model_1.Lecture.create(newLecture);
    // console.log(lecture);
    return {
        data: lecture
    };
});
const getAllLecture = () => __awaiter(void 0, void 0, void 0, function* () {
    const lecture = yield lecture_model_1.Lecture.find().populate("module");
    return {
        data: lecture
    };
});
const getLecturesByModule = (moduleId, search) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { module: moduleId };
    if (search) {
        query.title = { $regex: search, $options: "i" };
    }
    const lectures = yield lecture_model_1.Lecture.find(query)
        .populate("module")
        .sort({ lectureNumber: 1 });
    return { data: lectures };
});
const updateLecture = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const lecture = yield lecture_model_1.Lecture.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    return {
        data: lecture
    };
});
const deleteLecture = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lecture = yield lecture_model_1.Lecture.findByIdAndDelete(id);
    return {
        data: lecture
    };
});
exports.lectureService = {
    createLecture,
    getAllLecture,
    getLecturesByModule,
    updateLecture,
    deleteLecture
};
