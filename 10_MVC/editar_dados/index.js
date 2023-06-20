/* external */
const express = require("express");
const exphbs = require("express-handlebars");

/* internal */
const port = 3000;
const app = express();
const conn = require("./db/conn");
/* const Task = require("./models/Task"); */
const TaskRoutes = require("./routes/TasksRoutes");

/* handlebars */
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

/* read body */
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

/* router */
app.use("/tasks", TaskRoutes);

/* database */
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
