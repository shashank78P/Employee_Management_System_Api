import { Request, Response } from "express";
import AuthenticatedRequest from "../../types/AuthenticatedRequest";
import { updateEmployeeBodyDto } from "../../types/request/create-employee-body";
import EmployeeModel from "../../schema/employee-schema";
import mongoose from "mongoose";
import { NotFoundException } from "../../errors/not-found";
import { ErrorCodes } from "../../errors/ApiError";
import path from "path";
import fs from "fs";
import ApiResponse from "../../errors/ApiResponse";
import InternalServerExceptionError from "../../errors/internal-server-exception-error";

const updateEmployee = async (req: AuthenticatedRequest, res: Response) => {
    const adminId = req.user?._id!
    const employeeId = req.params.id as string

    const { name, email, mobileNumber, designation, gender, imageUrl, course } = req.body as updateEmployeeBodyDto


    if (imageUrl && !fs.existsSync(path.join(__dirname, `../../../${imageUrl}`))) {
        throw new NotFoundException("Invalid file path!.", ErrorCodes.NOT_FOUND);
    }

    const isAlreadyEmployeeExist = await EmployeeModel.findOne({
        _id: new mongoose.Types.ObjectId(employeeId),
        createdBy: new mongoose.Types.ObjectId(adminId)
    })


    if (!isAlreadyEmployeeExist) {
        throw new NotFoundException("Employee data not found!.", ErrorCodes.NOT_FOUND)
    }

    console.log("isAlreadyEmployeeExist")
    console.log(isAlreadyEmployeeExist)
    
    if (imageUrl && isAlreadyEmployeeExist?.imageUrl != imageUrl) {
        try {
           
            fs.unlink(path.join(__dirname, `../../../${isAlreadyEmployeeExist.imageUrl}`), (err) => {
                console.log(err)
                if(err){
                    throw new InternalServerExceptionError(undefined, "Something went wrong!.", ErrorCodes.INTERNAL_EXCEPTION)
                }
            });
        } catch (err) {
            throw new InternalServerExceptionError(undefined, "Something went wrong!.", ErrorCodes.INTERNAL_EXCEPTION)
        }
    }

    const result = await EmployeeModel.updateOne(
        {
            _id: new mongoose.Types.ObjectId(employeeId),
            createdBy: new mongoose.Types.ObjectId(adminId),
        },
        {
            $set: {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                mobileNumber,
                designation,
                gender,
                imageUrl,
                course,
                updatedAt: new Date(),
            },
        }
    );

    console.log(result)
    if (result.modifiedCount == 1) {
        res.status(201).json(new ApiResponse(201, result, "Employee details updated successfully!."))
    }
    else {
        throw new InternalServerExceptionError(undefined, "Something went wrong!.", ErrorCodes.INTERNAL_EXCEPTION)
    }
}

export default updateEmployee