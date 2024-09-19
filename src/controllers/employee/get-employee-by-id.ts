import { Response } from "express";
import AuthenticatedRequest from "../../types/AuthenticatedRequest";
import EmployeeModel from "../../schema/employee-schema";
import mongoose from "mongoose";
import { ErrorCodes } from "../../errors/ApiError";
import { NotFoundException } from "../../errors/not-found";
import ApiResponse from "../../errors/ApiResponse";

const GetEmployeeById = async (req : AuthenticatedRequest, res : Response) => {
    const adminId = req.user?._id!
    const employeeId = req.params.id as string

    const isAlreadyEmployeeExist = await EmployeeModel.findOne({
        _id: new mongoose.Types.ObjectId(employeeId),
        createdBy: new mongoose.Types.ObjectId(adminId)
    })

    if (!isAlreadyEmployeeExist) {
        throw new NotFoundException("Employee data not found!.", ErrorCodes.NOT_FOUND)
    }   

    res.status(200).json(new ApiResponse(200, isAlreadyEmployeeExist, "Employee Data Retrieved Successfully!."))
}

export default GetEmployeeById