const express = require ('express')
const router = express.Router()
const controlador = require('../controller/clientes')

router.get('', controlador.listClientes)
router.get('/:id', controlador.getClientes)
router.post('', controlador.createClientes)
router.post('/:id', controlador.updateClientes)
router.delete('', controlador.deleteClientes)



module.exports = router;