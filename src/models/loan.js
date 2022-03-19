const mongoose = require('mongoose')
const { Schema } = mongoose

const loanSchema = new Schema(
  {
    id: { type: String, unique: true },
    bookId: String,
    startsAt: Date,
    endsAt: Date,
    returnedAt: Date,
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

const Loan = mongoose.model('loan', loanSchema)

module.exports = Loan
