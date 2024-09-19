"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const login_schema_1 = __importDefault(require("../schema/login-schema"));
const data = {
    name: "Shashank P",
    password: "Password123"
};
function SeedAdminData() {
    return __awaiter(this, void 0, void 0, function* () {
        const hasedPassword = yield bcrypt.hash(data === null || data === void 0 ? void 0 : data.password, 10);
        const createdUser = yield login_schema_1.default.insertMany([
            {
                name: data === null || data === void 0 ? void 0 : data.name,
                password: hasedPassword
            }
        ]);
        console.log(createdUser);
    });
}
exports.default = SeedAdminData;
