const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema(
  {
    id: { type: String, unique: true },
    name: String,
    author: String,
    numberOfPages: Number,
    libraryId: String,
    onLoan: Boolean,
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

const Book = mongoose.model('book', bookSchema)

module.exports = Book
