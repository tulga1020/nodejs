const http = require("http");
const port = 8000;
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World\n Hi ");
});

server.listen(port, () => {
  console.log(`Server runn ing at http://localhost:${port}`);
});
