const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

const hbs = exphbs.create({ partialsDir: ['views/partials'] })

app.engine('handlebars', exphbs.engine())
app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.use(express.static('public'))
 
app.get('/blog', (req, res) => {
    const posts = [{
        title: "Aprender nodezada",
        categoria: "Js",
        body: "Conteudo incrivel de js",
        comments: 8
    },
    {
        title: "Aprender typescript",
        categoria: "Js com tipagem",
        body: "Igual js mas diferente",
        comments: 8
    },
    {
        title: "Aprender web",
        categoria: "web",
        body: "Como aprender a triade da web? (HTML, CSS, JS)",
        comments: 8
    }
]
    res.render('blog', {posts})
})

app.get('/dashboard', (req, res) => {
    const items = ["Item a", "Item b", "Item c"]
    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: "Aprender sobre a vida",
        categoria: 'js',
        body: "artigo de aprendizagem",
        comments: 5
    }
    res.render('blogpost', { post })
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