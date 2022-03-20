const auth = require('../lib/auth')

module.exports = {
  async auth(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) return next({ status: 401 })

    if (!authorization.startsWith('Bearer')) {
      return next({ status: 401 })
    }
    const token = authorization.split('Bearer ')[1]

    try {
      const payload = auth.verifyToken(token)

      res.locals.auth = payload

      return next()
    } catch (error) {
      //TODO: Specify error (invalid token, token expired)
      return next(error)
    }
  },
}
