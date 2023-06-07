const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
    // url decomposta
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name
    // status
    res.statusCode = 200;
    // header
    res.setHeader("Content-Type", "text/html")

    if(!name){
        res.end("<h2>Preencha o nome:</h2><form method='GET'><input type='text' name='name' /><input type='submit' value='enviar' /></form>")
    } else {
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})