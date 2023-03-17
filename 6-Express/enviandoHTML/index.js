const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res)=>{
    //concatena o caminho até templates, e mais para onde ele deve ir
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port)