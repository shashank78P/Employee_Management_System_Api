import { NextFunction, Response } from "express";
import AuthenticatedRequest from "../../types/AuthenticatedRequest";
import EmployeeModel from "../../schema/employee-schema";
import mongoose from "mongoose";
import ApiResponse from "../../errors/ApiResponse";
import { getAllEmployeeQueryParam } from "../../types/request/get-all-employees";

const getAllEmployee = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const { _id } = req.user!;
        console.log(req.query)

        const { sortBy, sortOrder, status, search } = req.query as unknown as getAllEmployeeQueryParam;

        const numberOfDocs = Number(req.query.limit) || 10;
        const page = Number(req.query.page) || 1;

        let skip = (page - 1) * numberOfDocs;
        let limit = numberOfDocs;

        const sortByQuery: any = {};

        if (sortBy) {
            sortByQuery[sortBy] = sortOrder === 'desc' ? -1 : 1;
        } else {
            sortByQuery['name'] = sortOrder === 'desc' ? -1 : 1;
        }


        let query: any = { createdBy: new mongoose.Types.ObjectId(_id) }

        if (status == "ACTIVE" || status == "IN_ACTIVE") {
            query['status'] = status
        }

        if (search) {
            query["$or"] = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { _id: { $regex: search, $options: 'i' } },
                { designation: { $regex: search, $options: 'i' } },
                { gender: { $regex: search, $options: 'i' } },
                { gender: { $regex: search, $options: 'i' } },
            ]
        }
        console.log(query)
        console.log(sortByQuery)

        const employeeCount = await EmployeeModel.countDocuments(query);

        const employees = await EmployeeModel.find(query)
            .sort(sortByQuery)
            .skip(skip)
            .limit(limit);

        res.status(200).json(new ApiResponse(200, { employees, total: employeeCount }, "Employee list fetched successfully!"));
    } catch (error) {
        next(error);
    }
};

export default getAllEmployee;
