const { celebrate, Joi, Segments } = require('celebrate')
const { v4: uuid } = require('uuid')
const bcrypt = require('bcrypt')
const Librarian = require('../../models/librarian')

module.exports = [
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).required(),
      email: Joi.string().min(5).required(),
      password: Joi.string().min(5).required(),
    }),
  }),
  async (req, res, next) => {
    try {
      const { id: libraryId } = req.params
      const { name, email, password } = req.body
      const id = uuid()
      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)
      const librarian = await Librarian.create({
        id,
        name,
        email,
        password: hashedPassword,
        libraryId,
      })
      return res.json(librarian.toObject())
    } catch (error) {
      if (error?.code === 11000) {
        return next({ status: 400, message: 'Librarian Already Exists' })
      }
      return next(error)
    }
  },
]
