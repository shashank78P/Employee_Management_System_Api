import multer, { Multer } from "multer"
import { BadRequestException } from "../errors/bad-request"
import { ErrorCodes } from "../errors/ApiError"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("=============================")
        console.log(file.mimetype)

        let isAllowed = file.mimetype.endsWith("/jpeg") || file.mimetype.endsWith("/jpg") || file.mimetype.endsWith("/png")
        return cb(isAllowed ? null : new BadRequestException(null, "Invalid file type!.", ErrorCodes.BAD_REQUEST), './public/uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload: Multer = multer({
    storage: storage,
});

export default upload;
