"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_connect_1 = __importDefault(require("./db-connect"));
const errors_1 = require("./middlewares/errors");
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true, origin: process.env.FRONTEND_URL }));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)())
    .use("/api", index_1.default)
    .use(errors_1.errorMiddleware);
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
const dbInstance = db_connect_1.default.getInstance();
dbInstance.connectToDB();
exports.default = app;
