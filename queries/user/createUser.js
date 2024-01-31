import fs from "fs";

const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/models/users.json";
export const createUsers = async (req, res) => {
  // create user
  try {
    const { email: paramEmail, password, username } = req?.body;
    const alluser = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
    const newUser = alluser.some((user) => user?.email === paramEmail);
    if (!newUser) {
      alluser.push({
        email: paramEmail,
        password,
        username,
      });
      await fs.writeFileSync(userDb, JSON.stringify(alluser));
      return "success";
    } else {
      return "Бүртгэлтэй хэрэглэгч bna ";
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// email-g olohiin tuld JSON file aa stringify hiigeed orj irsen mail-g davhtsaj bga esehiig shalgah
// email baihgui bol shineer uusgeh
