import { LoginService } from "../../controllers/Admin/AdminLogin";
import asyncHandler from "../../Services/asyncHandler";
import { Router } from "express";

const LogInRoute = Router();


LogInRoute.post("/", asyncHandler(LoginService))

export default LogInRoute