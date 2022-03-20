const express = require('express')
const createLibrary = require('./create-library')
const createBook = require('./create-book')
const createLibrarian = require('./create-librarian')

const router = express.Router()

router.post('/', createLibrary)
router.post('/:id/book', createBook)
router.post('/:id/librarian', createLibrarian)

module.exports = router
