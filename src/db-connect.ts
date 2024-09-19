import mongoose from "mongoose";
import StartServer from "./start-server";

class Database {
  private static instance: Database;
  private constructor() { }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public connectToDB(): void {
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
        StartServer();
        console.log("Connected to database");
      })
      .catch((err: Error) => {
        console.log("Error: while connecting to DB");
        console.error(err);
      });
  }
}

export default Database;
