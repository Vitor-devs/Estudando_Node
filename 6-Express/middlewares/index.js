const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const basePath = path.join(__dirname, 'templates')

// Middleware são códigos que só podem ser executados entre uma ação e outra
// Ex: o cara só pode acessar a página x se estiver logado, ent entre a resposta e a requisição eu faço essa verificação
const checkAuth = function(req, res, next){
    req.authStatus = true

    if(req.authStatus){
        console.log('Está logado, continue em frente')
        next()
    } else {
        console.log('Não está logado, faça o login')
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port)