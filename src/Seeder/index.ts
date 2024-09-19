import mongoose from "mongoose";
import SeedAdminData from "./admin-data-seeder"

const main = () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to the database.");
        return;
    }

    console.log("Connecting to DB...");
    if (!process.env.MONGODB_URI) {
        console.error("Error: MONGODB_URI not set.");
        return
    }
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to database");
            SeedAdminData()
        })
        .catch((err: Error) => {
            console.log("Error: while connecting to DB");
            console.error(err);
        });

}

main()