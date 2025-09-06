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
exports.CourseController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const course_service_1 = require("./course.service");
const createCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_service_1.CourseService.createCourse(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Course create success",
        data: result.data
    });
}));
const getAllCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_service_1.CourseService.getAllCourse();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "get all course success",
        data: result.data
    });
}));
const getSingleCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield course_service_1.CourseService.getSingleCourse(id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "get a single course success",
        data: result.data
    });
}));
const updatedCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield course_service_1.CourseService.updatedCourse(id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "single course updated success",
        data: result.data
    });
}));
const deletedCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const result = yield course_service_1.CourseService.deletedCourse(id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `${(_a = result.data) === null || _a === void 0 ? void 0 : _a.title} is deleted`,
        data: result.data
    });
}));
exports.CourseController = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    updatedCourse,
    deletedCourse
};
