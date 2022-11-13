const express = require('express')
const router = express.Router()

const {addBar,deleteBar, getBar,editBar, getBares} = require('../controllers/bares')

router.post('/', addBar)
router.get('/', getBares)
router.get('/:id', getBar)
router.delete('/:id', deleteBar)
router.put('/:id',editBar)


module.exports = router