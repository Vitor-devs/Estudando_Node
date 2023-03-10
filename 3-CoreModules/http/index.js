// serve para criar um mini servidor 
// servidor necessita de : modulo http, porta, ser ouvido
// usuario envia requisição e devolvemos respostas
// 
// 

const http = require('http') // importando 
const port = 3000 // qual porta 
const server = http.createServer((req, res)=>{ // criando server
    res.write('Oi http') //resolvendo a resposta
    res.end() // fechando
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`) // colocando pra ouvir e devolvendo uma callback para falar que ta tudo ok
})