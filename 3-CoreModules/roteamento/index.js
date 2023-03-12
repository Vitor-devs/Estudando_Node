const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res)=>{
    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1) // parte do primeiro '/'

    if(filename.includes('html')){
        if(fs.existsSync(filename)){
            fs.readFile(filename, function(erro, data){
                res.writeHead(200, {'Content-type': 'html'})
                res.write(data)
                res.end()
            })
        } else {
            fs.readFile('404.html', function(erro, data){
                res.writeHead(404, {'Content-type' : 'html'})
                res.write(data)
                res.end()
            })
        }
    }
})

server.listen(port)