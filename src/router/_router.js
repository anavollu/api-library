const express = require('express')

const router = express.Router()

router.use('/library', require('./library/_router'))
router.use('/book', require('./book/_router'))
router.use('/loan', require('./loan/_router'))

module.exports = router
