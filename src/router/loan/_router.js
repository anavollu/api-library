const express = require('express')
const finishLoan = require('./finish-loan')

const router = express.Router()

router.post('/:id/finish', finishLoan)

module.exports = router
