const jwt = require('jsonwebtoken')

module.exports = {
  createToken(data) {
    const token = jwt.sign(
      {
        data,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    )
    return token
  },

  verifyToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    return decoded
  },
}
