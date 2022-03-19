const { celebrate, Joi, Segments } = require('celebrate')
const { v4: uuid } = require('uuid')
const { addDays } = require('date-fns')
const Loan = require('../../models/loan')
const Book = require('../../models/book')

module.exports = [
  async (req, res, next) => {
    try {
      const { id: bookId } = req.params

      const { modifiedCount } = await Book.updateOne(
        { id: bookId, onLoan: { $ne: true } },
        { $set: { onLoan: true } }
      )
      if (!modifiedCount) {
        return next({
          status: 400,
          message: 'This Book Does Not Exists Or Is On Loan',
        })
      }

      const startsAt = new Date()
      const endsAt = addDays(startsAt, 30)
      const loan = await Loan.create({
        id: uuid(),
        bookId,
        startsAt,
        endsAt,
        onLoan: true,
      })
      return res.json(loan.toObject())
    } catch (error) {
      return next(error)
    }
  },
]
