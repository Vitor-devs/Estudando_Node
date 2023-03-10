// import
const fs = require('fs')

fs.readFile('teste.txt', 'utf-8', (err, data) => {

    if(err){
        console.log(err)
        console.log("Deu erro")
    } else {
        console.log(`O arquivo foi lido. Continha a mensagem : ${data}`)
        console.log("Arquivo lido com sucesso")
    }

})