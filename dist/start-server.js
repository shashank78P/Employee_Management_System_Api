"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const StartServer = () => {
    console.log(process.env.PORT);
    server_1.default.listen(process.env.PORT || 3001, () => {
        console.log("Server Started");
    });
};
exports.default = StartServer;
