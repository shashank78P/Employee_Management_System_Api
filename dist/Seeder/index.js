"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const admin_data_seeder_1 = __importDefault(require("./admin-data-seeder"));
const main = () => {
    if (mongoose_1.default.connection.readyState === 1) {
        console.log("Already connected to the database.");
        return;
    }
    console.log("Connecting to DB...");
    if (!process.env.MONGODB_URI) {
        console.error("Error: MONGODB_URI not set.");
        return;
    }
    mongoose_1.default
        .connect(process.env.MONGODB_URI)
        .then(() => {
        console.log("Connected to database");
        (0, admin_data_seeder_1.default)();
    })
        .catch((err) => {
        console.log("Error: while connecting to DB");
        console.error(err);
    });
};
main();
