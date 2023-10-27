const express = require('express')
const rotas =  require('./rotas/rotas')
const porta = process.env.PORT || 8080
const app = express()

app.use('/',rotas)

app.use('*',(req, res)=>{  // '*'atua como um middleware de manipulação de requisições curinga (catch-all)

    res.send('Portal frutos feito a mão')
})

app.listen(porta,console.log('servidor rodando'))