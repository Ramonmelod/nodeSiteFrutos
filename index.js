const express = require('express')
const rotas =  require('./rotas/rotas')
const porta = process.env.PORT || 8080
const app = express()
const path = require('path')

app.use('/',rotas)

app.use('*',(req, res)=>{  // '*'atua como um middleware de manipulação de requisições curinga (catch-all)
    const filePath = path.join(__dirname, 'pagina', 'index.html')
    res.sendFile(path.join(filePath))
})

app.listen(porta,console.log('servidor rodando'))