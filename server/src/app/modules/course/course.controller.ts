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

export const CourseController = {
    createCourse
}