import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { CourseService } from "./course.service";
import { ICourse } from "./course.interface";

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

const updatedCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await CourseService.updatedCourse(id, req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "single course updated success",
        data: result.data
    })

});


const deletedCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await CourseService.deletedCourse(id);
    console.log(result);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "course deleted updated success",
        data: result.data
    })

});

export const CourseController = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    updatedCourse,
    deletedCourse
}