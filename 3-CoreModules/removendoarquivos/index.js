const fs = require('fs')

fs.unlink('arquivo.txt', function(erro){
    if(erro){
        console.log(erro)
    } else {
        console.log('arq removido')
    }
})