const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Servidor rodando!");
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});