"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const ApiError_1 = require("../../errors/ApiError");
const ApiResponse_1 = __importDefault(require("../../errors/ApiResponse"));
const internal_server_exception_error_1 = __importDefault(require("../../errors/internal-server-exception-error"));
const LoginService = (req, res) => {
    try {
        res.status(200).json(new ApiResponse_1.default(200, {
            data: "Reached",
        }, "Route reached"));
    }
    catch (err) {
        throw new internal_server_exception_error_1.default(err, "Something went wrong!", ApiError_1.ErrorCodes.INTERNAL_EXCEPTION);
    }
};
exports.LoginService = LoginService;
