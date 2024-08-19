const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas = require('./rotas')

app.use(bodyParser.json())

const db = require('./db.json')

app.use('/produtos', rotas)


app.listen(8000)