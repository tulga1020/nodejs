const http = require("http");
const { open } = require("node:fs/promises");

const getWords = async () => {
  const words = [];

  const file = await open("./users.csv");
  const text = await file.readLines();

  for await (const line of text) {
    words.push(line);
  }
  return words;
};

const port = 8000;
const server = http.createServer(async (request, response) => {
  try {
    const words = await getWords();
    const newWords = words.map((el) => {
      return el.split(",");
    });
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end(`${newWords[0]} ,${newWords[1]}, hi`);
  } catch (error) {
    response.statusCode = 400;
    console.log(error.message, `Aldaa garsan bna`);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
