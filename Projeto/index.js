const express = require('express')
const app = express()
const path = require('path')
const port = 5000
const info = require('./rotas')

const caminhoBase = path.join(__dirname, `templates`)

app.use('/info', info)

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(`${caminhoBase}/home.html`)
})

app.get('/info', (req, res)=>{
    res.sendFile(`${caminhoBase}/info.html`)
})

app.listen(port)