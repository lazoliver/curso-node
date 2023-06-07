const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    // escrever uma mensagem quando acessar o servidor
    res.write("Oi HTTP!")
    // interromper a resposta
    res.end()
})
server.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}!`)
})