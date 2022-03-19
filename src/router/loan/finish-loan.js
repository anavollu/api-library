const { v4: uuid } = require('uuid')
const { addDays } = require('date-fns')
const Loan = require('../../models/loan')
const Book = require('../../models/book')

module.exports = [
  async (req, res, next) => {
    try {
      const { id: loanId } = req.params

      const loan = await Loan.findOneAndUpdate(
        { id: loanId, returnedAt: null },
        { $set: { returnedAt: new Date() } },
        { new: true }
      )
      if (!loan) {
        return next({
          status: 400,
          message: 'This Loan Is Already Finished Or Not Exists',
        })
      }

      Book.updateOne(
        { id: loan.bookId, onLoan: true },
        { $unset: { onLoan: 1 } }
      ).catch(console.error)

      return res.json(loan.toObject())
    } catch (error) {
      return next(error)
    }
  },
]
