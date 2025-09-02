import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { CourseService } from "./course.service";

const createCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await CourseService.createCourse(req.body);

    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Course create success",
        data: result.data
    })

});

const getAllCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await CourseService.getAllCourse();

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "get all course success",
        data: result.data
    })

});

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await CourseService.getSingleCourse(id);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "get a single course success",
        data: result.data
    })

});

export const CourseController = {
    createCourse,
    getAllCourse,
    getSingleCourse
}