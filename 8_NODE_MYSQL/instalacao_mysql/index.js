const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();
const port = 3000;

/* ler body */
app.use(
  express.urlencoded({
    urlencoded: true,
  })
);

app.use(express.json());

/* arquivos estáticos */
app.use(express.static("public"));

/* handlebars */
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

/* rota home */
app.get("/", (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err);
  }
});

/* banco de dados */
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19161774@",
  database: "nodemysql",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log("Conectou ao MySQL");

  /* servidor */
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
