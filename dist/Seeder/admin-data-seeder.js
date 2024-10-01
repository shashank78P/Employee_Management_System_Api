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
const admin_schema_1 = __importDefault(require("../schema/admin-schema"));
const data = {
    name: "Shashank P",
    password: "Password123"
};
function SeedAdminData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isUserExist = yield admin_schema_1.default.findOne({ name: data === null || data === void 0 ? void 0 : data.name });
            const hasedPassword = yield bcrypt.hash(data === null || data === void 0 ? void 0 : data.password, 10);
            console.log(hasedPassword);
            if (!(isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist._id)) {
                const user = new admin_schema_1.default({
                    name: data === null || data === void 0 ? void 0 : data.name,
                    password: hasedPassword
                });
                user.save();
                console.log("Admin user data seeded!.");
                return;
            }
            else {
                yield admin_schema_1.default.updateOne({
                    name: data === null || data === void 0 ? void 0 : data.name
                }, {
                    $set: {
                        password: hasedPassword
                    }
                });
                console.log("Admin user data updated!.");
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.default = SeedAdminData;
