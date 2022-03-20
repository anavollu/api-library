const express = require('express')
const { auth } = require('../../middleware/auth')
const createLoan = require('./create-loan')

const router = express.Router()

router.post('/:id/loan', auth, createLoan)

module.exports = router
