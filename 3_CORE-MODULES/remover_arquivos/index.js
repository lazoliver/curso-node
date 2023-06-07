const fs = require("fs");

fs.unlink("index.txt", function(err, data) {
    if(err) {
        console.log(`${err}`)
    } else {
        console.log("Arquivo removido")
    }
})