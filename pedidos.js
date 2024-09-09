const express = require ('express')
const router = express.Router()
const controlador = require('../controller/pedidos')

router.get('', controlador.listPedidos)
router.get('/:id', controlador.getPedidos)
router.post('', controlador.createPedidos)
router.post('/:id', controlador.updatePedidos)
router.delete('', controlador.deletePedidos)



module.exports = router;