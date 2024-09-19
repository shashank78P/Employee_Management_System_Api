import { NextFunction, Request, Response } from "express";
import ApiResponse from "../../errors/ApiResponse"
import adminModel from "../../schema/admin-schema";
import { BadRequestException } from "../../errors/bad-request";
import { ErrorCodes } from "../../errors/ApiError";
import { NotFoundException } from "../../errors/not-found";
import bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken";

export const LoginService = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    console.log(body)

    if (!body?.userName || !body?.password) {
        throw new BadRequestException(undefined, "Requirements not satisfied", ErrorCodes.BAD_REQUEST)
    }
    const userExist = await adminModel.findOne({
        name: body.userName,
    });

    if (!userExist?._id) {
        throw new NotFoundException("User Not Found", ErrorCodes.NOT_FOUND)
    }

    if (!userExist?.password) {
        throw new NotFoundException("User password not found", ErrorCodes.NOT_FOUND);
    }

    const passwordMatch = await bcrypt.compare(body.password, userExist.password);

    if (!passwordMatch) {
        throw new BadRequestException(undefined, "Invalid Credential", ErrorCodes.BAD_REQUEST);
    }
    const token = jwt.sign({ _id: userExist._id }, process.env.JWT_SECRET as string, {
        expiresIn: "10d"
    })

    res.cookie("user", token, {
        httpOnly: true,
        secure: false,    
        sameSite: 'lax'
    })

    res.status(200).json(new ApiResponse(200, {
        data: "Login successful!.",
    },
        "Login successful!."
    ))
}