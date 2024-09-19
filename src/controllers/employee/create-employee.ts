import { NextFunction, Response } from "express";
import AuthenticatedRequest from "../../types/AuthenticatedRequest";
import { createdEmployeeBodyDto } from "../../types/request/create-employee-body";
import { BadRequestException } from "../../errors/bad-request";
import { ErrorCodes } from "../../errors/ApiError";
import EmployeeModel from "../../schema/employee-schema";
import fs from "fs"
import path from "path";
import { NotFoundException } from "../../errors/not-found";
import ApiResponse from "../../errors/ApiResponse";
import mongoose from "mongoose";

const CreateEmployee = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const adminId = req.user?._id

    const { name, email, mobileNumber, designation, gender, imageUrl, course, status } = req.body as createdEmployeeBodyDto

    if (!name || !email || !mobileNumber || !designation || !gender || !imageUrl) {
        throw new BadRequestException(undefined, "Requirements are not satisfied!.", ErrorCodes.BAD_REQUEST)
    }

    const isAlreadyEmployeeExist = await EmployeeModel.findOne({ email: email?.trim()?.toLowerCase() })

    if (isAlreadyEmployeeExist?._id) {
        throw new BadRequestException(undefined, "Employee with this email already exist!.", ErrorCodes.BAD_REQUEST)
    }

    if (!fs.existsSync(path.join(__dirname, `../../../${imageUrl}`))) {
        throw new NotFoundException("Invalid file path!.", ErrorCodes.NOT_FOUND);
    }

    const newEmployee = new EmployeeModel({
        name : name.trim(),
        email : email.trim().toLowerCase(),
        mobileNumber,
        designation,
        gender,
        imageUrl,
        course,
        status,
        createdBy : new mongoose.Types.ObjectId(adminId)
    });

    await newEmployee.save()

    res.status(201).json(new ApiResponse(201, newEmployee, "Employee Created Successfully!." ))
}

export default CreateEmployee