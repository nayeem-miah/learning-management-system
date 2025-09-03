import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { lectureService } from "./lecture.service";

const createLecture = catchAsync(async (req: Request, res: Response) => {
    const result = await lectureService.createLecture(req.body);

    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Lecture create success",
        data: result.data
    })

});

const getAllLecture = catchAsync(async (req: Request, res: Response) => {
    const result = await lectureService.getAllLecture();

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All Lecture get success",
        data: result.data
    })

});

const moduleIdByGetLecture = catchAsync(async (req: Request, res: Response) => {
    const { module } = req.params;
    const { search } = req.query;
    const result = await lectureService.getLecturesByModule(module, search as string)

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "module id by find all Lecture get success",
        data: result.data
    })

});

const deleteLecture = catchAsync(async (req: Request, res: Response) => {
    const result = await lectureService.deleteLecture(req.params.id);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Lecture delete success",
        data: result.data
    })

});

const updateLecture = catchAsync(async (req: Request, res: Response) => {
    const result = await lectureService.updateLecture(req.params.id, req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Lecture update success",
        data: result.data
    })

});

export const LectureController = {
    createLecture,
    getAllLecture,
    moduleIdByGetLecture,
    deleteLecture,
    updateLecture
}
