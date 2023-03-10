const http = require('http')
const port = 3000
const fs = require('fs')
const servidor = http.createServer((req, res)=>{
    fs.readFile('mensagem.html', function(err, data){
        //          stsCode, res.setheader 
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write(data)
        return res.end()
    })
}) 

servidor.listen(port, ()=>{
    console.log('foi')
})