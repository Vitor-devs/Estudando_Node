const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')

// pegar como obj
router.use(
    express.urlencoded({
        extended: true,
    })
)

router.use(express.json())


router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res)=>{
    //console.log(req.body)
    //re.body.name que voce colocou no html
    const name = req.body.name
    const age = req.body.age
    console.log(`Nome: ${name}, Idade : ${age}`)
    res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, res)=>{
    const id = req.params.id

    //leitura da tabela do banco de dados e resgatar o usuario do banco
    console.log(`Estamos buscando pelo usuário de id: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router
