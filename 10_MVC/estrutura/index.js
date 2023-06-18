/* external */
const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

/* internal */
const port = 3000;
const app = express();
const Task = require("./models/Task.js");

/* read body */
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

/* static */
app.use(express.static("public"));

/* handlebars */
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

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
  .then(() => {
    /* server */
    app.listen(port, () => {
      console.log(`Server is running on http:localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
