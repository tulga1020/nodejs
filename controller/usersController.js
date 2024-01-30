// create user
// delete user
// update user
// get users
// get user ID
import { getUserByEmail } from "../queries/user/getUser.js";
import { getAllUsers } from "../queries/user/getUsers.js";
import { createUsers } from "../queries/user/createUser.js";
import { deleteUser } from "../queries/user/deleteUser.js";
export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    const allUser = await getAllUsers(req);
    res.send(allUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const createUsersController = async (req, res) => {
  try {
    // email-iig shalgaad json dotor iim mail baival "iim hereglegch bn gj butsaah"
    const newuser = await createUsers(req);
    res.send(newuser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const deleteUserController = async (req, res) => {
  try {
    const userdeleted = await deleteUser(req);
    res.send(userdeleted);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
