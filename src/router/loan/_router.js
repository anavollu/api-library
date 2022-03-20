const express = require('express')
const { auth } = require('../../middleware/auth')
const finishLoan = require('./finish-loan')

const router = express.Router()

router.post('/:id/finish', auth, finishLoan)

module.exports = router
