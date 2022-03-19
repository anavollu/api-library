const express = require('express')
const createLibrary = require('./create-library')
const createBook = require('./create-book')
const createLoan = require('./create-loan')

const router = express.Router()

router.post('/', createLibrary)
router.post('/book', createBook)
router.post('/book/:id/loan', createLoan)

module.exports = router
