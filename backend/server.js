const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Servidor rodando!");
  res.end();
});

server.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});