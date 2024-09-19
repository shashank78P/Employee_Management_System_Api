import ApiError, { ErrorCodes } from "./ApiError";

export class BadRequestException extends ApiError{
    constructor(error:any , message:string, errorCode: ErrorCodes){
        super(400, message, errorCode, error)
    }
}