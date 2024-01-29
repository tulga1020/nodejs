// create user
// delete user
// update user
// get users
// get user ID
import { getUserByEmail } from "../queries/user/getUser.js";
import { getAllUsers } from "../queries/user/getUsers.js";
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
