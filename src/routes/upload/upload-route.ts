import { Router } from "express";
import asyncHandler from '../../Services/asyncHandler'
import upload from '../../Services/multer-storage-service'
import userProfileUpload from "../../controllers/upload/user-profile-upload";
import authMeMiddleWare from "../../middlewares/auth-middleware";

const uploadRoute = Router()

uploadRoute.post("/profile-image-upload", asyncHandler(authMeMiddleWare) , asyncHandler(upload.single("profileImage")), asyncHandler(userProfileUpload))

export default uploadRoute