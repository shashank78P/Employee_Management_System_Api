"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to the database.");
            return;
        }
        console.log("Connecting to DB...");
        mongoose
            .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
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
