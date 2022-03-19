const mongoose = require('mongoose')
const app = require('./app')

const port = process.env.PORT
const db = process.env.DATABASE_URL

async function run() {
  try {
    await mongoose.connect(db)

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

run()
