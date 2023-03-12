const http = require('http')
const port = 3000
const fs = require('fs')


const server = http.createServer((req, res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if (!name){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {

        const NameComEspaco = name + ',\r\n'

        fs.appendFile('arquivo.txt', NameComEspaco, function(erro, data){
            res.writeHead(302, {
                Location: '/'
            })
            return res.end()
        })
        
    }
})

server.listen(port)