"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Login_1 = require("../Services/Login/Login");
const { Router } = require("express");
const LogInRoute = Router();
LogInRoute.get("/", Login_1.LoginService);
exports.default = LogInRoute;
