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
exports.CourseService = void 0;
const course_model_1 = require("./course.model");
const createCourse = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_model_1.Course.create(payload);
    return {
        data: course
    };
});
const getAllCourse = () => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_model_1.Course.find();
    return {
        data: course
    };
});
const getSingleCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_model_1.Course.findById(id);
    return {
        data: course
    };
});
const updatedCourse = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = Object.assign({}, payload);
    const course = yield course_model_1.Course.findByIdAndUpdate(id, updateData, { runValidators: true, new: true });
    return {
        data: course
    };
});
const deletedCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_model_1.Course.findByIdAndDelete(id);
    return {
        data: course
    };
});
exports.CourseService = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    updatedCourse,
    deletedCourse
};
