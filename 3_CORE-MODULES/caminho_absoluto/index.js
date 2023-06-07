const path = require("path");

console.log(path.resolve("teste.txt"))

const midFolder = "relatorios";

const fileName = "wilian.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath)