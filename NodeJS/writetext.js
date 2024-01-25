import { open } from "node:fs/promises";
import express from "express";
import fs from "fs";
import mock from "./mock.json" assert { type: "json" };
const app = express();
const port = 8000;
const ob = { email: "tulga1020@gmail.com", fullName: "Battulga.G" };
app.get("/", (req, res) => {
  try {
    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(mock));
  } catch (err) {
    res.send("file aa usgatsan bn aa");
  }
  res.send("file ustsan ym bish uu");
});
app.delete("/", (req, res) => {
  try {
    fs.unlinkSync("mock.json");
    res.status(200);
    res.send("Delete File successfully.");
  } catch (error) {
    res.send("file not found");
  } finally {
    res.send("za yuch bolsongui");
  }
  res.status(200);
  res.send("Ustgachihsan shuu haha");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
