/* external */
const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

/* models */
const User = require("./models/User");

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

/* route: home */
app.get("/", (req, res) => {
  res.render("home");
});

/* sequelize */
conn
  .sync()
  .then(() => {
    /* server */
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
