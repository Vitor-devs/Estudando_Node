

//Módulo externo
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

//Módulo interno
const somaViolenta = require('./soma').soma

const a = parseInt(args['a'])
const b = parseInt(args['b'])

somaViolenta(a,b)

