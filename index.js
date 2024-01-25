import user from "./user.json" assert { type: "json" };
import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises";
import { writeFile } from "node:fs/promises";

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

app.post("/user", async (req, res) => {
  const { username, email } = req.body;

  try {
    if (!username || !email) {
      throw new Error("user name esvel mail buruu baina");
    }
    // readfile users.json
    const usreee = await fs.readFile(
      "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/user.json",
      "utf8"
    );
    const data = JSON.parse(usreee);

    data.user.push({ username, email });
    // ehleed json file existed user.json baival array-dee nemeed bich
    writeFile(
      "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/user.json",
      JSON.stringify(data)
    );

    res.status(200).send("mail bolon ner zuv baina");
  } catch (err) {
    res.send(err.message);
  }
});
// hervee usej.json baihgui bol shine user.json uusgeed array=dee nem
app.app.listen(port, () => console.log(`http://localhost:${port}`));

// user.json buh datag butsaa
