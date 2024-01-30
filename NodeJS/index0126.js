import user from "../user.json" assert { type: "json" };
import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises";
import { writeFile } from "node:fs/promises";
import { create } from "domain";
import { readFile } from "fs";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

// app.get("/user", (req, res) => {
//   //username lastname ali neg n baihgui bol error 400
//   res.status(200);
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify(user));
// });
const readFile = async () => {
  try {
    const oldUsers = await fs.readFileSync("./user.json", "utf8");
    return oldUsers;
  } catch (err) {
    return null;
  }
};
app.post("/user", async (req, res) => {
  const { username: updatedUsername, email: updatedEmail } = req.body;
  const AllUsersJson = await readFile();
  const { users } = JSON.parse(AllUsersJson);
  const updatedData = users.map(({}) => {
    if (email === updatedEmail) {
      username = updatedUsername;
    }
    return { email, username };
  });
  const rightUser = users.find(({ email }) => {
    if (email === updatedEmail) {
      return true;
    }
  });
  rightUser.username = username;
  await fs.writeFileSync("./user.json", JSON.stringify({ users: updatedData }));
  const result = await readFile();
  response.send(result);
});
// hervee usej.json baihgui bol shine user.json uusgeed array=dee nem

//user create with id must be unique
// user-n id-gaaraa note create
//user-n id gaar ene user-n buh note-g avch ireh
const crypto = require("crypto");

const id = crypto.randomBytes(16).toString("hex");

console.log(id);
app.post("/created", async (req, res) => {
  const { username, email, ID } = req.body;
});
app.app.listen(port, () => console.log(`http://localhost:${port}`));

// user.json buh datag butsaa
