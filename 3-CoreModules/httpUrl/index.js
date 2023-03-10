const http = require('http')
const port = 3000
const servidor = http.createServer((req, res)=>{
    //             chama o modulo.converte(urlAtualRequisitada, garantir funcionamento)
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
     
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')

    //se nao vier nome, cria html perugntando o nome
    if(!name){
        res.end('<h1> Preencha seu nome </h1> <form method="GET"> <input type="text" name = "name"/> <input type=submit value = "enviar" ></form>')
    } else { //se nao ja da bem vindo
        res.end(`Seja bem vindo ${name}`)
    }
})

//coloca pra rodar
servidor.listen(port, ()=>{
    console.log('foi')
})




