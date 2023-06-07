const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
    // renderizando html
    fs.readFile("index.html", function(err, data) {
        // head
        res.writeHead(200, {"Content-Type": "text/html"})
        // escrevendo os dados do index.html
        res.write(data)
        // fim da requisição
        return res.end()
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})