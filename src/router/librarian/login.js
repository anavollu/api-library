const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const auth = require('../../lib/auth')
const Librarian = require('../../models/librarian')

module.exports = [
  async (req, res, next) => {
    try {
      const { email, password } = req.body
      const found = await Librarian.findOne({ email })
      console.log(found, req.body)
      if (!found) {
        return next({ status: 400 })
      }
      const isEqual = await bcrypt.compare(password, found.password)
      if (isEqual) {
        const token = auth.createToken(email, found.name)
        return res.json({ token })
      }
    } catch (error) {
      return next(error)
    }
  },
]
