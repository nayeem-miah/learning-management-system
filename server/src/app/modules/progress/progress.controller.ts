import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { progressService } from "./progress.service";


const startCourse = catchAsync(async (req: Request, res: Response) => {
    const { userId, lectureId } = req.body;
    const result = await progressService.startCourse(userId, lectureId);

    res.status(201).json({
        statusCode: 201,
        success: true,
        message: "Course started successfully & first lecture unlocked",
        data: result.data
    });

});

export const ProgressController = {
    startCourse
} 