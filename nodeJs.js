// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const palindromo = require('./testeJS')

// app.use(bodyParser.json())

// app.post('/e-palindromo', function (req, res){
//     const resposta = palindromo(req.body.palavra)
//     if(resposta === true){
//         res.send(true)
//         }
//         res.send(false)
//     }
// )

// app.listen(8000)

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db.json')
app.get('/produtos', function (req,res){
    var produtos = db.produtos
    res.json(produtos)
})

app.get('/produtos/:id', function (req,res){
    const _id = req.params.id
    res.send(_id)
})

app.listen(8000)
