import { NextFunction, Response } from "express"
import AuthenticatedRequest from "../../types/AuthenticatedRequest"
import EmployeeModel from "../../schema/employee-schema"
import mongoose from "mongoose"
import { NotFoundException } from "../../errors/not-found"
import { ErrorCodes } from "../../errors/ApiError"
import ApiResponse from "../../errors/ApiResponse"

const DeleteEmployee = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const adminId = req.user?._id!
    const employeeId = req.params.id as string

    const isAlreadyEmployeeExist = await EmployeeModel.findOne({
        _id: new mongoose.Types.ObjectId(employeeId),
        createdBy: new mongoose.Types.ObjectId(adminId)
    })

    if (!isAlreadyEmployeeExist) {
        throw new NotFoundException("Employee data not found!.", ErrorCodes.NOT_FOUND)
    }

    const result = await EmployeeModel.deleteOne({
        _id: new mongoose.Types.ObjectId(employeeId),
        createdBy: new mongoose.Types.ObjectId(adminId)
    })

    console.log(result)

    res.status(201).json(new ApiResponse(201, [], "Employee Deleted Successfully!."))
}

export default DeleteEmployee