const express = require('express')
const createLibrary = require('./create-library')

const router = express.Router()

router.post('/', createLibrary)

module.exports = router
