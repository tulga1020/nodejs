import http from "http";
import mock from "./mock.json" assert { type: "json" };

// fs.writeFile("./user.txt", "Hello world", (err) => {
//   if (err) throw new Error("Something not working");
//   else console.log("dfsdf");
// });
const port = 4000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(mock));
  res.end();
});
server.listen(port, () => console.log(`http://localhost:${port}`));
