import chalk from "chalk";
const _ = require('lodash');

const a = [1,2,3,4,5,6]
const b = [2,4,6,8,10,12]

diferenca = _.difference(a,b)
console.log(chalk.red.bold(diferenca))