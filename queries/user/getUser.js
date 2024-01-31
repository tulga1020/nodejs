import fs from "fs";
const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/models/users.json";
export const getUserByEmail = async (req, res) => {
  try {
    const { email: paramEmail } = req.body;
    const allUsersJson = await fs.readFileSync(userDb);
    const allUser = JSON.parse(allUsersJson);
    const exactUser = allUser.find(({ email }) => email === paramEmail);
    return exactUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
