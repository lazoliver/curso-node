const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();
const port = 3000;

/* ler body */
app.use(
  express.urlencoded({
    extended: true,
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

/* formulário cadastro de livro */
app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES ("${title}", "${pageqty}")`;

  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
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
