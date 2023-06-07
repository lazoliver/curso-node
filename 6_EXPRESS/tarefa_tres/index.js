const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

const basePath = path.join(__dirname, "templates");

const users = require("./users");

app.use(express.static("public"));

app.use("/users", users);

app.use("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

app.use((req, res, next) => {
  res.status = 404;
  res.sendFile(`${basePath}/404.html`);
});
