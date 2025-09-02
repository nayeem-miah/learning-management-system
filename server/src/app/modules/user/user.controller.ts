import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.createUser(req.body);

    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "User create success",
        data: result.data
    })
});

const getAll = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getAll();

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "get all user success",
        data: result.data
    })
});
const getMe = catchAsync(async (req: Request, res: Response) => {
    const decodedToken = req.user;
    const result = await UserService.getMe(decodedToken);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "get user success",
        data: result.data
    })
});


export const UserController = {
    createUser,
    getAll,
    getMe
}



