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
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

app.use(bodyParser.json())

const db = require('./db.json')
const { error } = require('console')

app.get('/produtos', function (req,res){
    var produtos = db.produtos
    res.json(produtos)
})

app.get('/produtos/:id', function (req,res){
    const _id = req.params.id
    const lista_produtos = db.produtos
    const produto = lista_produtos.find((produto) => produto.id == _id)

    produto ? res.send(produto) : res.status(404).semd({error:'not foud'})
    res.send(produto)
})

app.post('/produtos', function (req,res)){
    const dados = req.body
    if(!dados.nome || !dados.preco){
    res.status(406).send({error:'Nome e preço devem ser informados'})
}
}


const _id = uuidv4()
dados.id = _id



app.listen(8000)
