import { IModule } from "./module.interface"
import { Module } from "./module.model";

const createModule = async (payload: Partial<IModule>) => {
    const module = await Module.create(payload);
    return {
        data: module
    }
};

const getAllModule = async () => {
    const module = await Module.find().populate("course");
    return {
        data: module
    }
};

const courseIdByGetModule = async (course: string) => {
    const module = await Module.find({ course: course }).populate("course")
        .sort({ moduleNumber: 1 });
    return {
        data: module
    }
};

const updateModule = async (id: string, payload: Partial<IModule>) => {
    const module = await Module.findByIdAndUpdate(id, payload, { new: true, runValidators: true });

    return {
        data: module
    }
};

const deleteModule = async (id: string) => {
    const module = await Module.findByIdAndDelete(id);
    return {
        data: module
    }
};

export const ModuleService = {
    createModule,
    getAllModule,
    updateModule,
    deleteModule,
    courseIdByGetModule
}