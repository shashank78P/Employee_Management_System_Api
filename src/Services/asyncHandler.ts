import { ErrorCodes } from "../errors/ApiError"
import InternalServerExceptionError from "../errors/internal-server-exception-error"
import { NextFunction, Response, Request } from "express";

const asyncHandler = (controllerCallback: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controllerCallback(req, res, next);
    } catch (err: any) {
        const errorCode = err.errorCode || ErrorCodes.INTERNAL_EXCEPTION;
        const message = err.message || "Something went wrong!";

        let exception = new InternalServerExceptionError(err, message, errorCode)
        console.log(exception)
        next(exception)
    }
}

export default asyncHandler