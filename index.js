import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { allUsersRouter, userRouter } from "./routes/userRouter.js";
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(userRouter);
app.use(allUsersRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
