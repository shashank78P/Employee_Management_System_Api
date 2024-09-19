import { Response } from "express";
import AuthenticatedRequest from "../../types/AuthenticatedRequest";
import AdminModel from "../../schema/admin-schema";
import mongoose from "mongoose";
import ApiResponse from "../../errors/ApiResponse";
import { BadRequestException } from "../../errors/bad-request";
import { ErrorCodes } from "../../errors/ApiError";

const getMe = async (req: AuthenticatedRequest, res: Response) => {
    const user = await AdminModel.findOne({ _id: new mongoose.Types.ObjectId(req["user"]?._id) });

    if (!user) {
        throw new BadRequestException(undefined, "User Not Found", ErrorCodes.NOT_FOUND)
    }
    res.status(200).json(new ApiResponse(200, user, "User data retrieved successfully!"));
}

export default getMe