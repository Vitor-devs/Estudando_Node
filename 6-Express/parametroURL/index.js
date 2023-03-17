const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const basePath = path.join(__dirname, 'templates')

// Middleware são códigos que só podem ser executados entre uma ação e outra
// Ex: o cara só pode acessar a página x se estiver logado, ent entre a resposta e a requisição eu faço essa verificação

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})


app.get('/users/:id', (req, res)=>{
    const id = req.params.id

    //leitura da tabela do banco de dados e resgatar o usuario do banco
    console.log(`Estamos buscando pelo usuário de id: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.listen(port)