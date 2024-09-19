"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInSchema = void 0;
const mongoose_1 = require("mongoose");
const LogInSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "User name require."],
        unique: [true, "User with this name already exists!."],
        minlength: [3, 'User name must be at least 3 characters long'],
        maxlength: [100, 'User name must be less than 100 characters long'],
    },
    password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        readonly: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});
exports.LogInSchema = LogInSchema;
const LogInModel = (0, mongoose_1.model)("LogIn", LogInSchema);
exports.default = LogInModel;
