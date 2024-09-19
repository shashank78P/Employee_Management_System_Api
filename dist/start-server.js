"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const StartServer = () => {
    server_1.default.listen(3001, (res, err) => {
        if (!err) {
            console.log("listening on 3001");
        }
        else {
            console.log("Encountered error");
            console.error(err);
        }
    });
};
exports.default = StartServer;
