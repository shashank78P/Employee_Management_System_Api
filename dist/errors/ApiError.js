"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodes = void 0;
class ApiError extends Error {
    constructor(statusCode, message, errorCode, errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errorCode = errorCode;
        this.errors = errors;
    }
}
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["USER_NOT_FOUND"] = 1001] = "USER_NOT_FOUND";
    ErrorCodes[ErrorCodes["USER_ALREADY_EXISTS"] = 1002] = "USER_ALREADY_EXISTS";
    ErrorCodes[ErrorCodes["INVALID_PASSWORD"] = 1003] = "INVALID_PASSWORD";
    ErrorCodes[ErrorCodes["UNAUTHORIZED"] = 1004] = "UNAUTHORIZED";
    ErrorCodes[ErrorCodes["INVALID_CREDENTIALS"] = 1006] = "INVALID_CREDENTIALS";
    ErrorCodes[ErrorCodes["INTERNAL_EXCEPTION"] = 500] = "INTERNAL_EXCEPTION";
    ErrorCodes[ErrorCodes["INVALID_DATAFORMAT"] = 3002] = "INVALID_DATAFORMAT";
    ErrorCodes[ErrorCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ErrorCodes[ErrorCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
exports.default = ApiError;
