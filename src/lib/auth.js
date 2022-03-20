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
}
