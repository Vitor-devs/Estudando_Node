const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

const nome = args['nome']
const Programador = args['Programador']

console.log(args)
console.log(nome)
console.log(Programador)