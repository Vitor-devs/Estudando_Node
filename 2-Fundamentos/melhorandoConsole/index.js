import chalk from "chalk"

const nota = 2 

// console.log(chalk.green('uou'))
// console.log(chalk.green.bold('uou'))

if (nota >= 7 ){
    console.log(chalk.green('Aprovadasso'))
} else {
    console.log(chalk.bgRed.black("Reprovaste"))
}