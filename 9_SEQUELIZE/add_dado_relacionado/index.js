/* external */
const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User");
const Address = require("./models/Address");

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

/* static */
app.use(express.static("public"));

/* handlebars */
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

/* form edit */
app.post("/users/update", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  await User.update(userData, { where: { id, id } });

  res.redirect("/");
});

/* form delete */
app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.redirect("/");
});

/* form adduser */
app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

/* form address */
app.post("/address/create", async (req, res) => {
  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    UserId,
    street,
    number,
    city,
  };

  await Address.create(address);

  res.redirect(`/users/edit/${UserId}`);
});

/* route: edit */
app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userEdit", { user });
});

/* route: user */
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("user", { user });
});

/* route: adduser */
app.get("/adduser", (req, res) => {
  res.render("addUser");
});

/* route: home */
app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });

  res.render("home", { users });
});

/* database */
conn
  /* forçar a criação de tabela com force */
  /* .sync({ force: true }) */
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
