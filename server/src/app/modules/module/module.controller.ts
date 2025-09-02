import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ModuleService } from "./module.service";

const createModule = catchAsync(async (req: Request, res: Response) => {
    const result = await ModuleService.createModule(req.body);

    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Module create success",
        data: result.data
    })

});

const getAllModule = catchAsync(async (req: Request, res: Response) => {
    const result = await ModuleService.getAllModule();

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All module get success",
        data: result.data
    })

});

const deleteModule = catchAsync(async (req: Request, res: Response) => {
    const result = await ModuleService.deleteModule(req.params.id);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Module delete success",
        data: result.data
    })

});

const updateModule = catchAsync(async (req: Request, res: Response) => {
    const result = await ModuleService.updateModule(req.params.id, req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Module update success",
        data: result.data
    })

});

export const ModuleController = {
    createModule,
    getAllModule,
    deleteModule,
    updateModule
}
