const mongoose = require('mongoose')
const { Schema } = mongoose

const librarianSchema = new Schema(
  {
    id: { type: String, unique: true },
    name: String,
    email: { type: String, unique: true },
    password: String,
    libraryId: String,
  },
  {
    toObject: {
      transform: function (doc, ret) {
        delete ret._id
        delete ret.__v
      },
    },
  }
)

const Librarian = mongoose.model('librarian', librarianSchema)

module.exports = Librarian
