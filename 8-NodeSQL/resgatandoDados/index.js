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


conn.connect(()=>{
    app.listen(3000)
})