const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = [
    { item: "A", id: 1 },
    { item: "B", id: 2 },
    { item: "C", id: 3 },
  ];
  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender NodeJS",
    category: "Javascript",
    body: "Este artigo vai te ajudar a aprender NodeJS",
    comments: 4,
  };
  res.render("blogpost", { post });
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

  const approved = false;

  res.render("home", { user, cor, auth, approved });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
