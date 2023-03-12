const fs = require('fs')
const path = require('path')

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe')
}

console.log("Irei criar!")

fs.mkdirSync("minhapasta")

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe')
} else {
    console.log(path.resolve('./minhapasta'))
}