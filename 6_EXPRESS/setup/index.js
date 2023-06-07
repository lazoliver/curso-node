const express = require("express");
const app = express();
// variável de ambiente
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
