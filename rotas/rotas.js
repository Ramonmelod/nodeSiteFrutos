const express = require('express')
const rotas = express.Router()

rotas.get('/',(req, res)=>{
    res.send('frutos feito a mão principal')

})

rotas.get('/nossahistoria',(req, res)=>{
    res.send('Essa é a história do frutos feito a mão')

})

module.exports = rotas