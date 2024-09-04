const db = require('../db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')


const listPedidos = async (req,res) => {
    var Pedidos = db.Pedidos
    res.json(Pedidos)
}
const getPedidos = async (req, res) => {
    const _id = req.params.id
    const lista_pedidos = db.pedidos
    const pedido = lista_pedidos.find(
        (pedido) => pedido.id == _id
        )
    pedido ? res.send(pedido) : res.status(404).send({error:'not found'})
}
const createPedidos = async (req,res) => {
    const dados = req.body
    if(!dados.nome || !dados.preco) {
        return res.status(406).send({error:'Nome e preço deve ser informado'})
    }
    const _id = uuidv4()
    dados.id = _id
    db.pedidos.push(dados)
    fs.writeFile('../db.json', JSON.stringify(db), (err) => {
        if (err){
            return res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204).send()
}
const updatePedidos = async (req,res) => {
    const _id = req.params.id  
    const dados = req.body
    const lista_Pedidos = db.Pedidos
    const Pedido = lista_Pedidos.find(
        (Pedido) => Pedido.id == _id
        )
    if (!Pedido || !dados) {
       return res.status(404).send({error:'not found'})
    }
    
    // atualizar o Pedido
}
const deletePedidos = async (req,res) => {
    const _id = req.params.id
    const lista_Pedidos = db.Pedidos
    const Pedido = lista_Pedidos.find(
        (Pedido) => Pedido.id == _id
        )
        var idx = lista_Pedidos.indexOf(Pedido)
        lista_Pedidos.splice(idx,1)
        fs.writeFile('./db.json', JSON.stringify(db), (err) => { 
            if (err){
                return res.status(500).send({error:'erro no servidor'})
            }
        })
        res.status(204).send()
    // deletar o Pedido
}

module.exports = {listPedidos, getPedidos, createPedidos, updatePedidos, deletePedidos}