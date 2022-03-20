const bcrypt = require('bcrypt')
const { celebrate, Segments, Joi } = require('celebrate')
var jwt = require('jsonwebtoken')
const auth = require('../../lib/auth')
const Librarian = require('../../models/librarian')

module.exports = [
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().min(5).required(),
      password: Joi.string().min(5).required(),
    }),
  }),
  async (req, res, next) => {
    try {
      const { email, password } = req.body
      const found = await Librarian.findOne({ email })
      if (!found) {
        return next({ status: 400 })
      }

      const isEqual = await bcrypt.compare(password, found.password)

      if (isEqual) {
        const token = auth.createToken(email, found.name)
        return res.json({ token })
      }
      return next({ status: 400 })
    } catch (error) {
      return next(error)
    }
  },
]
