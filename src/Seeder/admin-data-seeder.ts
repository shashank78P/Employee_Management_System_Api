const bcrypt = require("bcryptjs")

import adminModel from "../schema/admin-schema"

const data = {
    name: "Shashank P",
    password: "Password123"
}

async function SeedAdminData() {
    try {

        const isUserExist = await adminModel.findOne({ name: data?.name })
        const hasedPassword = await bcrypt.hash(data?.password, 10)

        console.log(hasedPassword)

        if (!isUserExist?._id) {
            const user = new adminModel({
                name: data?.name,
                password: hasedPassword
            })
            user.save()
            console.log("Admin user data seeded!.")
            return
        }
        else {
            await adminModel.updateOne({
                name: data?.name
            },
                {
                    $set: {
                        password: hasedPassword
                    }
                })
            console.log("Admin user data updated!.")
        }
    }
    catch (err) {
        console.log(err)
    }
}

export default SeedAdminData
