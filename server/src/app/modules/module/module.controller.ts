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

export const ModuleController = {
    createModule
}
