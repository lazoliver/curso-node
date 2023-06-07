const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    // status code
    res.statusCode = 200;
    // configurando o header
    res.setHeader("Content-Type", "text/html");
    // enviando html
    res.end("<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando atualização...</p>")
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})