import express from "express";
import {
  getAllUsersController,
  getUserByEmailService,
  createUsersController,
  deleteUserController,
} from "../controller/usersController.js";
export const userRouter = express.Router();
//get
userRouter.get("/users/:email", getUserByEmailService);
//get all users
userRouter.get("/users", getAllUsersController);
// create users
userRouter.post("/users/:email", createUsersController);
//delete users
userRouter.delete("/users/:email", deleteUserController);
