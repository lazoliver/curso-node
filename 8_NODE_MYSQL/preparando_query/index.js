const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");

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

/* resgatar dados */
app.get("/books", (req, res) => {
  const sql = `SELECT * FROM books;`;

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const books = data;

    res.render("books", { books });
  });
  return;
});

/* resgatar individual */
app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
    }
    const book = data[0];

    res.render("book", { book });
  });
});

/* formulário cadastro de livro */
app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`;
  const data = ["title", "pageqty", title, pageqty];

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

/* editar livro */
app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const book = data[0];

    res.render("editbook", { book });
  });
});

/* atualizar livro */
app.post("/books/update", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
  const data = ["title", title, "pageqty", pageqty, "id", id];

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/books");
  });
});

/* deletar livro */
app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/books");
  });
});

/* servidor */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
