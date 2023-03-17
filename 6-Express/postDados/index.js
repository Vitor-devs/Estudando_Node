const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const basePath = path.join(__dirname, 'templates')

// ler o corpo da requisição
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})


app.get('/users/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res)=>{
    //console.log(req.body)
    //re.body.name que voce colocou no html
    const name = req.body.name
    const age = req.body.age
    console.log(`Nome: ${name}, Idade : ${age}`)
    res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id

    //leitura da tabela do banco de dados e resgatar o usuario do banco
    console.log(`Estamos buscando pelo usuário de id: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})



app.listen(port)
