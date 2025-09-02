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


export const UserController = {
    createUser
}



