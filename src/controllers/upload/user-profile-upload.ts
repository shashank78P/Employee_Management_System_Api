import { NextFunction, Request, Response } from "express"
import ApiResponse from "../../errors/ApiResponse"

const userProfileUpload = async (req: Request, res: Response, next: NextFunction) => {
    const { file } = req
    res.status(201).json(
        new ApiResponse(201, file ?? {}, "File uploaded successfully")
    )
}

export default userProfileUpload