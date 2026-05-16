import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";


dotenv.config();
connectDb();
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

export default app;