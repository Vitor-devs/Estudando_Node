const fs = require('fs')

fs.stat('novoArq.txt', (erro, status)=>{
    if(erro){
        console.log(erro)
        return
    } 
    console.log(status.isFile())
    console.log(status.isDirectory())
    console.log(status.isSymbolicLink())
    console.log(status.ctime) //creation time - Horario eua
    console.log(status.size) // length
    
})