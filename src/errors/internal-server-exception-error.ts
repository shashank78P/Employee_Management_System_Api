import ApiError, { ErrorCodes } from "./ApiError";

class InternalServerExceptionError extends ApiError{
    constructor(error:any, message : string, errorcode : ErrorCodes) {
        super(500, message, errorcode , error)
    }
}

export default InternalServerExceptionError