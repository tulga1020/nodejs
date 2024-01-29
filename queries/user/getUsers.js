import { response } from "express";
import fs from "fs";
const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/models/users.json";
export const getAllUsers = async (request, response) => {
  try {
    const allUsersJson = await fs.readFileSync(userDb);
    const allUser = JSON.parse(allUsersJson);
    return allUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
