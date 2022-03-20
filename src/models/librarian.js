const mongoose = require('mongoose')
const { Schema } = mongoose

const librarianSchema = new Schema(
  {
    id: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    libraryId: String,
  },
  {
    toObject: {
      transform: function (doc, ret) {
        delete ret._id
        delete ret.__v
        delete ret.password
      },
    },
  }
)

const Librarian = mongoose.model('librarian', librarianSchema)

module.exports = Librarian
