import express from "express";
import {
  getAllUsersController,
  getUserByEmailService,
} from "../controller/usersController.js";
export const userRouter = express.Router();

//get
userRouter.get("/users/:email", getUserByEmailService);
//get all users
export const allUsersRouter = express.Router();
allUsersRouter.get("/users", getAllUsersController);
