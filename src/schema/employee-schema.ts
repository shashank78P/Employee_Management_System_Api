import mongoose, { Schema, model } from "mongoose"

const EmployeeSchema = new Schema({
    name: {
        type: String,
        require: [true, "User name require."],
        minlength: [3, 'User name must be at least 3 characters long'],
        maxlength: [100, 'User name must be less than 100 characters long'],
    },
    email: {
        type: String,
        require: [true, 'Email address is required.'],
        unique: [true, "Email must be unique."],
    },
    mobileNumber: {
        type: String,
        require: [true, 'Email address is required.'],
        unique: [true, "Email must be unique."],
        validate: {
            validator: function (num: string) {
                return num.length == 10;
            },
            message: (props: { value: string }) => `${props.value} is not a valid phone number!`
        },
    },
    gender: {
        type: String,
        enum: ['M', 'F'],
        require: [true, "Gender is required!."]
    },
    designation: {
        type: String,
        enum: ['HR', 'Manager', 'Sales'],
        require: [true, "Designation is required!."]
    },
    course: {
        type: [String],
        enum: ['MCA', 'BCA', 'BSC'],
        require: [true, "Course is required!."]
    },
    imageUrl: {
        type: String,
        require: [true, "image is required!."],
        validate: {
            validator: function (url: string) {
                return url.endsWith("jpg") || url.endsWith("png");
            },
            message: (props: { value: string }) => `${props.value} is not a valid image formate!.`
        },
    },
    status: {
        type: String,
        enum : ['ACTIVE', 'IN_ACTIVE'],
        default: 'ACTIVE'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Admin"
    },
    createdAt: {
        type: Date,
        default: Date.now,
        readonly: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

const EmployeeModel = model("Employee",
    EmployeeSchema)

export default EmployeeModel

export {
    EmployeeSchema
}
