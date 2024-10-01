"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const ApiError_1 = __importDefault(require("./ApiError"));
class BadRequestException extends ApiError_1.default {
    constructor(error, message, errorCode) {
        super(400, message, errorCode, error);
    }
}
exports.BadRequestException = BadRequestException;
