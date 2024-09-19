class ApiError extends Error{
    statusCode: number
    message: string;
    errorCode: ErrorCodes
    errors:any
    
    constructor(statusCode: number, message: string, errorCode: ErrorCodes, errors: any = []){
        super(message)
        console.log(message)
        this.statusCode = statusCode
        this.message = message
        this.errorCode = errorCode
        this.errors = errors
    }
}

 export enum ErrorCodes{
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS = 1002,
    INVALID_PASSWORD = 1003,
    UNAUTHORIZED = 1004,
    INVALID_CREDENTIALS = 1006,
    INTERNAL_EXCEPTION = 500,
    INVALID_DATAFORMAT = 3002,
    BAD_REQUEST = 400,
    NOT_FOUND = 404
}

export default ApiError;
