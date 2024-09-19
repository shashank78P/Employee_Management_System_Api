import { Response, Router } from "express";
import LogInRoute from "./Login/Login-route"
import uploadRoute from "./upload/upload-route"
import employeeRoute from "./employee/employee-route";
import AdminRoute from "./admin/admin-route";
import AuthenticatedRequest from "../types/AuthenticatedRequest";
import ApiResponse from "../errors/ApiResponse";

const RootRoute = Router();

RootRoute.use("/logout", (req : AuthenticatedRequest, res : Response) => {
    res.cookie("user", '')
    res.status(200).json(new ApiResponse(200, "Logged out successfully!."))
})
RootRoute.use("/login", LogInRoute)
RootRoute.use("/upload", uploadRoute)
RootRoute.use("/employee", employeeRoute)
RootRoute.use("/admin", AdminRoute)


export default RootRoute