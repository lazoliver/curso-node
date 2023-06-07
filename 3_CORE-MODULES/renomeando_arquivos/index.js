const fs = require("fs");

const arqNovo = "index.html";
const arqVelho = "index.txt";

fs.rename(arqVelho, arqNovo, function(err) {
    if(err) {
        console.log(`${err}`)
        return
    } else {
        console.log(`Arquivo ${arqVelho} renomeado para ${arqNovo}!`)
    }
})