const express = require('express')
const router = express.Router()

const {addUsuario,getUsuario,getUsuarios,deleteUsuario, editUsuario} = require('../controllers/usuarios')

router.post('/', addUsuario)
router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.delete('/:id', deleteUsuario)
router.put('/:id',editUsuario)


module.exports = router