import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Database from "./db-connect";
import { errorMiddleware } from "./middlewares/errors"
import RootRouter from "./routes/index";
import path from "path";

const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
.use("/api", RootRouter)
.use(errorMiddleware);

app.use(express.static(path.join(__dirname, '../public')));

const dbInstance = Database.getInstance();
dbInstance.connectToDB();

export default app


