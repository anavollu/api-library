const mongoose = require('mongoose')
const { Schema } = mongoose

const librarySchema = new Schema(
  {
    id: { type: String, unique: true },
    name: { type: String, unique: true },
    address: String,
  },
  {
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      },
    },
  }
)

const Library = mongoose.model('library', librarySchema)

module.exports = Library
