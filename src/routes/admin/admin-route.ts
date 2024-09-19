import { Router } from "express"
import asyncHandler from "../../Services/asyncHandler";
import authMeMiddleWare from "../../middlewares/auth-middleware";
import getMe from "../../controllers/Admin/get-me";

let AdminRoute = Router()

AdminRoute.get("/get-me", asyncHandler(authMeMiddleWare), asyncHandler(getMe))

export default AdminRoute