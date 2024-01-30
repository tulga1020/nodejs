import { response } from "express";
import fs from "fs";
const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/models/users.json";
export const deleteUser = async (req, res) => {
  try {
    const { email: paramEmail } = req.params;
    const allUsersJson = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
    const otherUser = allUsersJson.filter((user) => user?.email !== paramEmail);
    await fs.writeFileSync(userDb, JSON.stringify(otherUser));
    return "Deleted successfully";
  } catch (error) {
    throw (new Error(error.message), "ugaasaa iim hereglegch baigaagui shuu!");
  }
};
