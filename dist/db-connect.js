"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const start_server_1 = __importDefault(require("./start-server"));
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    connectToDB() {
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
            (0, start_server_1.default)();
            console.log("Connected to database");
        })
            .catch((err) => {
            console.log("Error: while connecting to DB");
            console.error(err);
        });
    }
}
exports.default = Database;
