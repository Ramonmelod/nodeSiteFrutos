const express = require('express')
const rotas = express.Router()
const path = require('path') // possibilita o uso de path.join para localização do html

rotas.use(express.static(path.join(__dirname, '..', 'pagina')))  //  o middleware express.static serve arquivos estáticos da pasta "pagina"

rotas.get('/',(req, res)=>{  
    const filePath = path.join(__dirname, '..' ,'pagina', 'index.html') // o '..' faz com que path.join procure a pasta pagina na pasta pai de rotas.js
    res.sendFile(path.join(filePath))
})

rotas.get('/nossahistoria',(req, res)=>{
    res.send('Essa é a história do frutos feito a mão')

})

module.exports = rotas