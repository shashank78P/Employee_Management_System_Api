import { Router } from "express";
import asyncHandler from "../../Services/asyncHandler";
import authMeMiddleWare from "../../middlewares/auth-middleware";
import getAllEmployee from "../../controllers/employee/get-all-employee";
import CreateEmployee from "../../controllers/employee/create-employee";
import updateEmployee from "../../controllers/employee/update-employee";
import DeleteEmployee from "../../controllers/employee/delete-employee";
import GetEmployeeById from "../../controllers/employee/get-employee-by-id";

let employeeRoute = Router()

employeeRoute.get("/get-all", asyncHandler(authMeMiddleWare), asyncHandler(getAllEmployee))
employeeRoute.post("/create", asyncHandler(authMeMiddleWare), asyncHandler(CreateEmployee))
employeeRoute.get("/get/:id", asyncHandler(authMeMiddleWare), asyncHandler(GetEmployeeById))
employeeRoute.put("/update/:id", asyncHandler(authMeMiddleWare), asyncHandler(updateEmployee))
employeeRoute.delete("/delete/:id", asyncHandler(authMeMiddleWare), asyncHandler(DeleteEmployee))

export default employeeRoute