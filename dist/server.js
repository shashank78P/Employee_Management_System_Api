"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db_connect_1 = __importDefault(require("./db-connect"));
const Login_route_1 = __importDefault(require("./routes/Login-route"));
const app = express();
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// routes
app.use("/login", Login_route_1.default);
const dbInstance = db_connect_1.default.getInstance();
dbInstance.connectToDB();
exports.default = app;
