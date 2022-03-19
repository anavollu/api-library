const express = require('express')

const router = express.Router()

router.use('/library', require('./library/_router'))

module.exports = router
