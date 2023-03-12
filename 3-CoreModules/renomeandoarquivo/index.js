const fs = require('fs')
fs.rename('arquivo.txt', 'arquivoNovinho.txt', function(erro){
    if(erro){
        console.log(erro)
    }
})