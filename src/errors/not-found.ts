import ApiError, { ErrorCodes } from "./ApiError";


export class NotFoundException extends ApiError{
    constructor(message:string, errorCode: ErrorCodes){
        super(404, message, errorCode, null)
    }
   
}