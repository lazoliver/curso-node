/* external */
const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

/* internal */
const app = express();
const port = 3000;

/* read body */
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

/* handlebars */
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

/* static */
app.use(express.static("public"));

/* route: home */
app.get("/", (req, res) => {
  res.render("home");
});

/* server */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
