import mock0125 from "./mock0125.json" assert { type: "json" };
import express from "express";
import dotenv from "dotenv ";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;
app.post("/signup", (req, res) => {
  try {
    const { email, username } = req.body;
    res.status(200).send({ msg: { email, username } });
    res.status(400).send({ msg: "User baina" });
  } catch (error) {
    res.status(500).send({ error });
  }
});
app.listen(port, () => console.log(`http://localhost:${port}`));
