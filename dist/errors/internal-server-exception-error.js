"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("./ApiError"));
class InternalServerExceptionError extends ApiError_1.default {
    constructor(error, message, errorcode) {
        super(500, message, errorcode, error);
    }
}
exports.default = InternalServerExceptionError;
