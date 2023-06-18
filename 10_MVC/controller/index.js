/* external */
const express = require("express");
const exphbs = require("express-handlebars");

/* internal */
const port = 3000;
const app = express();

/* database */
const conn = require("./db/conn");

/* models */
const Task = require("./models/Task");

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
app.get("/", async (req, res) => {
  try {
    await res.render("home");
  } catch (err) {
    console.log(err);
    return;
  }
});

conn
  .sync()
  .then(async () => {
    /* server */
    await app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
