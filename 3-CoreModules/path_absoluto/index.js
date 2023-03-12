const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))

//path dinamico
const midFolder = "relatórios"
const fileName = "vitor.txt"

const finalPath = path.join("/", "arquivos", midFolder, fileName)
console.log(finalPath)