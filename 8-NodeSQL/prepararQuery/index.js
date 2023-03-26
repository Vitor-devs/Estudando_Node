const express = require('express')
const app = express()
const pool = require('./db/conn')
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

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/books', function (req, res) {
    const query = `SELECT * FROM books`
  
    pool.query(query, function (err, data) {
      if (err) {
        console.log(err)
      }
  
      const books = data
  
      console.log(data)
  
      res.render('books', { books })
    })
  })
  

app.get('/books/:id', (req, res)=>{
    const bookID = req.params.id
    const queryWhere = `SELECT * FROM books WHERE id = ${bookID}`

    pool.query(queryWhere, function (erro, data){
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


app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title
    const qntPag = req.body.pagesqty
    
    //query                             nomes no bd
    const query = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['titulo', 'pageqty', title, qntPag]
  
    pool.query(query, data, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect('/')
    })
})



app.get('/books/edit/:id', function (req, res){
    const id = req.params.id
    const sql = `SELECT * FROM books where id = ${id}`

    pool.query(sql, (erro, data)=>{
        if(erro){
            console.log(erro)
        }
        
        const book = data[0]
        
        res.render('editbook', {book})
    })
})

app.post('/books/updatebook',  (req, res)=> {
    const bookID = req.body.id
    const title = req.body.title
    const pageqty = req.body.pagesqty

    console.log(bookID)
    console.log(pageqty)
    console.log(title)

    const queryUpdate = `UPDATE books SET titulo = '${title}', pageqty = ${pageqty}  WHERE id = ${bookID}`
    console.log('query rodou')

    pool.query(queryUpdate, function (err) {
      if (err) {
        console.log(err)
      }

      console.log('query executada')
  
      res.redirect(`/books`)
    })
})

app.post('/books/remove/:id', function (req, res){
    const id = req.params.id
    const querySQLDelete = `DELETE FROM books WHERE id = ${id}`
    
    pool.query(querySQLDelete, function(erro){
        if(erro){
            console.log(erro)
            return
        }
        
        res.redirect('/books')
    })
})

app.listen(3000)
