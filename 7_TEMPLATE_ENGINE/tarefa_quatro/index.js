const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 3000;

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [
  {
    id: 0,
    name: "T-shirt",
    quantity: 10,
    color: "Black",
    available: true,
  },
  {
    id: 1,
    name: "Hat",
    quantity: 5,
    color: "Black",
    available: true,
  },
  {
    id: 2,
    name: "Shoes",
    quantity: 2,
    color: "White",
    available: true,
  },
];

app.get("/product/:id", (req, res) => {
  const product = products[req.params.id];

  res.render("product", { product });
});

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}!`);
});
