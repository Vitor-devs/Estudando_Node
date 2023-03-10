const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200 //
    res.setHeader('Content-type', 'text/html') // 
    res.end('<h1> Sua resposta foi processada</h1><p> testando att </p>')
})

server.listen(port, ()=>{
    console.log(`Entrei na porta ${port}`)
})