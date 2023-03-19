const express = require('express')
const router = express.Router()
const path = require('path')
const caminhoBase = path.join(__dirname, `templates`)



router.get('/info', (req, res)=>{
    res.sendFile(`${caminhoBase}/info.html`)
})


module.exports = router