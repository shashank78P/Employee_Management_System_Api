import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import InternalServerExceptionError from "../errors/internal-server-exception-error";
import { ErrorCodes } from "../errors/ApiError";
import { BadRequestException } from "../errors/bad-request";
import AuthenticatedRequest from "../types/AuthenticatedRequest";
import AdminModel from "../schema/admin-schema";
import mongoose from "mongoose";

const authMeMiddleWare = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const cookie = req.cookies
    if (!process.env.JWT_SECRET) {
        res.clearCookie('user');
        throw new InternalServerExceptionError(undefined, "Something went wrong!.", ErrorCodes.INTERNAL_EXCEPTION)
    }

    if (!cookie.user) {
        res.clearCookie('user');
        throw new BadRequestException(undefined, "Authentication token not found.", ErrorCodes.UNAUTHORIZED)
    }
    
    const isVerified: any = jwt.verify(cookie?.user, process.env.JWT_SECRET)
    
    const isAdminExist = await AdminModel.findOne({ _id: new mongoose.Types.ObjectId(isVerified?._id) })
        
    if(!isAdminExist?._id){
        res.clearCookie('user');
        throw new BadRequestException(undefined, "Please Login!.", ErrorCodes.UNAUTHORIZED)
    }

    req['user'] = isVerified

    next()
}

export default authMeMiddleWare