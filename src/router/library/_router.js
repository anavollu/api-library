const express = require('express')
const createLibrary = require('./create-library')
const createBook = require('./create-book')

const router = express.Router()

router.post('/', createLibrary)
router.post('/:id/book', createBook)

module.exports = router
