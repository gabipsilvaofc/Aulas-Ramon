const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotasProdutos = require('./rotas/produtos')
const rotasClientes = require('./rotas/clientes')
const rotasPedidos = require('./rotas/pedidos')

app.use(bodyParser.json())

const db = require('./db.json')

app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)
app.use('/pedidos', rotasPedidos)


// app.listen(8000)

module.exports = app