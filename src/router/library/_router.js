const express = require('express')
const createLibrary = require('./create-library')
const createBook = require('./create-book')
const createLibrarian = require('./create-librarian')
const { auth } = require('../../middleware/auth')

const router = express.Router()

router.post('/', auth, createLibrary)
router.post('/:id/book', auth, createBook)
router.post('/:id/librarian', auth, createLibrarian)

module.exports = router
