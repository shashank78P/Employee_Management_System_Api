import { Schema , model } from "mongoose"

const AdminSchema = new Schema({
    name: {
        type: String,
        require: [true, "User name require."],
        unique: [true, "User with this name already exists!."],
        minlength: [3, 'User name must be at least 3 characters long'],
        maxlength: [100, 'User name must be less than 100 characters long'],
    },
    password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        readonly : true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

const AdminModel = model("Admin" , 
AdminSchema) 

export default AdminModel

export {
    
AdminSchema
}
