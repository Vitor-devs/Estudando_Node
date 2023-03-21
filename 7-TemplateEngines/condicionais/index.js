const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        nome: 'Vitor',
        sobrenome: "Coelho",
        age: 18
    }


    const teste = "Testando envio"

    const auth = true
    const approved = true

    res.render('home', { user: user, teste, auth, approved })
})

app.listen(3000)