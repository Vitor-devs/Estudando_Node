const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const produtos = [
    {
        id:1,
        nome:"Arroz",
        preco:7,
    },
    {
        id:2,
        nome:"Feijão",
        preco:6,
    },
    {
        id:3,
        nome: "Carne",
        preco:26,
    },
]


app.get('/', (req, res)=>{
    res.render('home', {produtos})
})

app.get('/produto/:id', (req, res)=>{
    const prodID = produtos[parseInt(req.params.id) - 1]
    res.render(`produto`, {prodID})
})

app.listen(3000)