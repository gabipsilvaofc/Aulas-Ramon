require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotasProdutos = require('./rotas/produtos')
const rotasClientes = require('./rotas/clientes')
const rotasPedidos = require('./rotas/pedidos')
const rotas_autenticacao = require('./rotas/rotas_autenticacao')
const coockieParser = require('cookie-parser')

app.use(bodyParser.json())
app.use(coockieParser())

const db = require('./db.json')

app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)
app.use('/pedidos', rotasPedidos)
app.use('/auth', rotas_autenticacao)


app.listen(8000)

module.exports = app