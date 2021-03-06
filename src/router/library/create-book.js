const { celebrate, Joi, Segments } = require('celebrate')
const { v4: uuid } = require('uuid')
const Book = require('../../models/book')

module.exports = [
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).required(),
      author: Joi.string().min(5).required(),
      numberOfPages: Joi.number().min(1).required(),
    }),
  }),
  async (req, res, next) => {
    try {
      const { id: libraryId } = req.params
      const { name, author, numberOfPages } = req.body
      const id = uuid()
      const book = await Book.create({
        id,
        name,
        author,
        numberOfPages,
        libraryId,
      })
      return res.json(book.toObject())
    } catch (error) {
      return next(error)
    }
  },
]
