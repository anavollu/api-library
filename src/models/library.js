const mongoose = require('mongoose')
const { Schema } = mongoose

const librarySchema = new Schema({
  id: String,
  name: String,
  address: String,
})

const library = mongoose.model('library', librarySchema)

module.exports = library
