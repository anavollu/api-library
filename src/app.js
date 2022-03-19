const { errors } = require('celebrate')
const express = require('express')
const { STATUS_CODES } = require('http')
const router = require('./router/_router')

const app = express()

app.use(express.json())

app.use('/api', router)

app.use('*', (req, res, next) => {
  return next({ status: 404 })
})

app.use(errors())

app.use((error, req, res, next) => {
  const status = error.status || 500

  let message = error.message || STATUS_CODES[status]

  if (error instanceof Error) {
    console.error(error)
    message = STATUS_CODES[status]
  }

  if (error.type === 'entity.parse.failed') {
    message = 'Body is invalid JSON'
  }

  return res
    .status(status)
    .send({ message, statusCode: status, error: STATUS_CODES[status] })
})

module.exports = app
