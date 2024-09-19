import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";


export const errorMiddleware = (error: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(error.statusCode ?? 500).json({
        message: error.message,
        errorCode: error.errorCode,
        errors: error.errors
    })
}