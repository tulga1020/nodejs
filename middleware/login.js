import fs from "fs";
const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/models/users.json";

export const loginUser = async (req, res, next) => {
  try {
    const { email: bodyemail, password } = req.body;

    const loginuserjson = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
    const userfound = loginuserjson.find(({ email }) => email === bodyemail);
    if (!userfound) {
      res.send("email or password buruu baina");
      return;
    }
    if (password === userfound.password) {
      next();
    }
  } catch (error) {
    res.send("email or password buruu baina");
  }
};
