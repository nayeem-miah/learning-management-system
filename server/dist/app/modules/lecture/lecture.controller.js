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
exports.LectureController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const lecture_service_1 = require("./lecture.service");
const createLecture = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lecture_service_1.lectureService.createLecture(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Lecture create success",
        data: result.data
    });
}));
const getAllLecture = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lecture_service_1.lectureService.getAllLecture();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All Lecture get success",
        data: result.data
    });
}));
const moduleIdByGetLecture = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { module } = req.params;
    const { search } = req.query;
    const result = yield lecture_service_1.lectureService.getLecturesByModule(module, search);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "module id by find all Lecture get success",
        data: result.data
    });
}));
const deleteLecture = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lecture_service_1.lectureService.deleteLecture(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Lecture delete success",
        data: result.data
    });
}));
const updateLecture = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lecture_service_1.lectureService.updateLecture(req.params.id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Lecture update success",
        data: result.data
    });
}));
exports.LectureController = {
    createLecture,
    getAllLecture,
    moduleIdByGetLecture,
    deleteLecture,
    updateLecture
};
