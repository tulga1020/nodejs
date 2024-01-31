import express from "express";
import {
  getAllUsersController,
  getUserByEmailService,
  createUsersController,
  deleteUserController,
  updateUserController,
  loginuserController,
} from "../controller/usersController.js";
import { loginUser } from "../middleware/login.js";
export const userRouter = express.Router();
//get users
userRouter.get("/users/:email", getUserByEmailService);
//get all users
userRouter.get("/users", getAllUsersController);
// create user
userRouter.post("/users/:email", createUsersController);
//delete user
userRouter.delete("/users/:email", deleteUserController);
//update user
userRouter.put("/users/:email", updateUserController);
//login user
userRouter.post("/login", loginUser, loginuserController);
