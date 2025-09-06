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
exports.ModuleService = void 0;
const module_model_1 = require("./module.model");
const createModule = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_model_1.Module.create(payload);
    return {
        data: module
    };
});
const getAllModule = () => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_model_1.Module.find().populate("course");
    return {
        data: module
    };
});
const courseIdByGetModule = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_model_1.Module.find({ course: course }).populate("course")
        .sort({ moduleNumber: 1 });
    return {
        data: module
    };
});
const getSingleModule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_model_1.Module.findById(id);
    return {
        data: module
    };
});
const updateModule = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_model_1.Module.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    return {
        data: module
    };
});
const deleteModule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_model_1.Module.findByIdAndDelete(id);
    return {
        data: module
    };
});
exports.ModuleService = {
    createModule,
    getAllModule,
    updateModule,
    deleteModule,
    courseIdByGetModule,
    getSingleModule
};
