const express = require('express')
const app = express()
const port = 3000

// req => requisição => Algo que veio do usuário (form ou algo assim)
// res => resposta => Algo que enviamos para o usuario


app.get('/', (req, res)=>{
    res.send('Olá mundo')
})

app.listen(port, ()=>{
    console.log('opa, ta funcionando na porta 3000')
})