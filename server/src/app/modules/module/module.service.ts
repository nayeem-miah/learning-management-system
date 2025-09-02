import { IModule } from "./module.interface"
import { Module } from "./module.model";

const createModule = async (payload: Partial<IModule>) => {
    const module = await Module.create(payload);
    return {
        data: module
    }
};

export const ModuleService = {
    createModule
}