const fs = require("fs")

console.log('inicio')
fs.writeFile("arquivoAssincrono.txt", "olá", (err)=>{ //ele não espera isso aqui executar, ele vai para o próximo
    setTimeout(()=>{
        console.log("Arquivo criado")
    }, 1000)
})

console.log("fim")