const express = require('express')
const app = express()
const mysql = require('mysql')
const exphbs = require('express-handlebars')

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine())
app.use(express.static('public'))
app.use(
    express.urlencoded({
        extended: true
    })
)
//pegar body em json
app.use(express.json())

app.get('/books/:id', (req, res)=>{
    const bookID = req.params.id
    const queryWhere = `SELECT * FROM books WHERE id = ${bookID}`

    conn.query(queryWhere, function (erro, data){
        if(erro){
            console.log(erro)
            return 
        }
        //zero pq ele vai trazer um array daquilo que atendem as condições do where
        const dadosLivro = data[0]
        console.log(dadosLivro)
        res.render('book', {dadosLivro})
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password:'',
    database: 'nodemysql2'
})

app.get('/', (req, res)=>{
    res.render('home')
})

app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title
    const qntPag = req.body.pagesqty
    
    //query                             nomes no bd
    const querySQLInsert = `INSERT INTO books (titulo, pageqty) VALUES ('${title}', '${qntPag}')`

    conn.query(querySQLInsert, function(erro){
        if(erro){
            console.log('Deu erro')
        }
        res.redirect('/books')
    })
})

app.get('/books', (req, res)=>{
    const querySQLSelect = `SELECT * FROM books`
    
    conn.query(querySQLSelect, (erro, data)=>{
        if (erro){
            console.log(erro)
            return
        } 
        
        const books = data
        console.log(books)
        res.render('books', {books})

    })
})

app.get('/books/edit/:id', (req, res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM books where id = ${id}`

    conn.query(sql, (erro, data)=>{
        if(erro){
            console.log(erro)
        }
        
        const book = data[0]

        res.render('editbook', {book})
    })
})

conn.connect(()=>{
    app.listen(3000)
})