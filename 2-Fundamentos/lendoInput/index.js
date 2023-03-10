const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout, 
})

readLine.question("Qual sua linguagem de programação preferida? ", (language) =>{
    console.log(`Vi aqui que sua linguagem de programação favorita é ${language} \n`)
    readLine.close()
})