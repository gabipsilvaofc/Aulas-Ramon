const db = require('../db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const bcryptjs = require('bcryptjs')


const listClientes = async (req,res) => {
    var clientes = db.clientes
    return res.json(clientes)
}
const getClientes = async (req, res) => {
    const _id = req.params.id
    const lista_clientes = db.clientes
    const cliente = lista_clientes.find(
        (cliente) => cliente.id == _id
        )
    cliente ? res.send(cliente) : res.status(404).send({error:'not found'})
}
const createClientes = async (req,res) => {
    const dados = req.body
    if(!dados.nome || !dados.email) {
       return res.status(406).send({error:'Nome e email deve ser informado'})
    }
    const _id = uuidv4()
    //cripto senha com o bcryptjs
    const senhaCripto = await bcryptjs.hashSync(dados.senha, 10)
    dados.senha = senhaCripto
    dados.id = _id
    db.clientes.push(dados)
    fs.writeFile('../db.json', JSON.stringify(db), (err) => {
        if (err){
            console.log(err)
            return res.status(500).send({error:'erro no servidor'})
        }
    })
    return res.status(204).send()
}
const updateClientes = async (req,res) => {
    const _id = req.params.id  
    const dados = req.body
    const lista_clientes = db.clientes
    const cliente = lista_clientes.find(
        (cliente) => cliente.id == _id
        )
    if (!cliente || !dados) {
        return res.status(404).send({error:'not found'})
    }
    for(const dado in dados){
        if(!(dado in cliente)){
            console.log('erro! esse dado não existe');
               continue;
          }
          cliente[dado] = dados[dado];
        }
        fs.writeFile('./db.json', JSON.stringify(db), (err) => {
          if (err){
              return res.status(500).send({error:'erro no servidor'})
          }
       })
       return res.status(200).send({cliente})
   }
    // atualizar o cliente
    
const deleteClientes = async (req,res) => {
    const _id = req.params.id
    const lista_clientes = db.clientes
    const cliente = lista_clientes.find(
        (cliente) => cliente.id == _id
        )
    var idx = lista_clientes.indexOf(cliente)
    lista_clientes.splice(idx,1)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => { 
        if (err){
            return res.status(500).send({error:'erro no servidor'})
        }
    })
    return res.status(204).send()
    // deletar o cliente
}  

module.exports = {listClientes, getClientes, createClientes, updateClientes, deleteClientes}