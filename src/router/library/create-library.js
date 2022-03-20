const { celebrate, Segments, Joi } = require('celebrate')
const { v4: uuid } = require('uuid')
const Library = require('../../models/library')

module.exports = [
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).required(),
      address: Joi.string().min(5).required(),
    }),
  }),
  async (req, res, next) => {
    try {
      const { name, address } = req.body
      const id = uuid()
      const library = await Library.create({ id, name, address })
      return res.json(library.toObject())
    } catch (error) {
      if (error?.code === 11000) {
        return next({
          status: 400,
          message: `${Object.keys(error.keyPattern).join(',')} Must Be Unique`,
        })
      }
      return next(error)
    }
  },
]
