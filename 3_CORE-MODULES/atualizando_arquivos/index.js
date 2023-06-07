const http = require("http");
const url = require("url");
const fs = require("fs");

// determinando a porta do servidor
const port = 3000;

// criando servidor
const server = http.createServer((req, res) => {
    // decompondo a url
    const urlInfo = url.parse(req.url, true)
    // determinando o valor de name via url
    const name = urlInfo.query.name;

    // escrevendo arquivos com o nome enviado
    if(!name) {
        fs.readFile("index.html", function(err, data) {
            // head
            res.writeHead(200, {"Content-Type": "text/html"})
            // imprimindo o conteúdo do indexedDB.html
            res.write(data)
            // finalizando a requisição
            return res.end()
        })
    } else {
        const nameNewLine = name + "\r\n"

        fs.appendFile("arquivo.txt", nameNewLine, function(err, data) {
            res.writeHead(302, {
                Location: "/",
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})