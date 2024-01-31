import fs from "fs";

const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/models/users.json";
export const updateUser = async (req, res) => {
  //update user
  try {
    const useremail = req.params.email;
    const { password: updatedPassword, username: updatedUsername } = req.body;
    const alluser = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
    const updatedUser = alluser.find((user) => user?.email === useremail);
    updatedUser.password = updatedPassword;
    updatedUser.username = updatedUsername;
    const userup = alluser.push(updatedUser);
    await fs.writeFileSync(userDb, JSON.stringify(userup));
    return "user updated successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
