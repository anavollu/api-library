const express = require('express')
const createLoan = require('./create-loan')

const router = express.Router()

router.post('/:id/loan', createLoan)

module.exports = router
