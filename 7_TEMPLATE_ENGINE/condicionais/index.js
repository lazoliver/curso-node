const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/", (req, res) => {
  const user = {
    name: "Wilian",
    surname: "Oliveira",
    age: 30,
  };

  const cor = {
    cor: "Blue",
  };

  const auth = true;

  res.render("home", { user, cor, auth });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
