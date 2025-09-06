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
exports.ModuleController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const module_service_1 = require("./module.service");
const createModule = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield module_service_1.ModuleService.createModule(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Module create success",
        data: result.data
    });
}));
const getAllModule = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield module_service_1.ModuleService.getAllModule();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All module get success",
        data: result.data
    });
}));
const courseIdByGetModule = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { course } = req.params;
    const result = yield module_service_1.ModuleService.courseIdByGetModule(course);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All module get success",
        data: result.data
    });
}));
const getSingleModule = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield module_service_1.ModuleService.getSingleModule(id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: " module get success",
        data: result.data
    });
}));
const deleteModule = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield module_service_1.ModuleService.deleteModule(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Module delete success",
        data: result.data
    });
}));
const updateModule = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield module_service_1.ModuleService.updateModule(req.params.id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Module update success",
        data: result.data
    });
}));
exports.ModuleController = {
    createModule,
    getAllModule,
    deleteModule,
    updateModule,
    courseIdByGetModule,
    getSingleModule
};
