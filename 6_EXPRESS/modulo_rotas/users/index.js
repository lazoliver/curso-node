const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

// chamar o arquivo userform.html quando acessar a rota /users/add
router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

// durante o envio do formulário captura os seguintes dados
router.post("/save", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);
  res.sendFile(`${basePath}/userform.html`);
});

// ao acessar a rota /users/:id devolve a página users.html
router.get("/:id", (req, res) => {
  const id = req.params.id;

  // leia a table users
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
