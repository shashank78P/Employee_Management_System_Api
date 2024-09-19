"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const ApiError_1 = __importDefault(require("./ApiError"));
class NotFoundException extends ApiError_1.default {
    constructor(message, errorCode) {
        super(404, message, errorCode, null);
    }
}
exports.NotFoundException = NotFoundException;
