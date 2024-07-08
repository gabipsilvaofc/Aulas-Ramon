const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const palindromo = require('./testeJS')

app.use(bodyParser.json())

app.post('/e-palindromo', function (req, res){
    const resposta = palindromo(req.body.palavra)
    if(resposta === true){
        res.send(true)
        }
        res.send(false)
    }
)

app.listen(8000)
