import express from 'express'

require('dotenv').config()

const PORT = 3000

const app = express()

app.use(express.json())
app.use('/', function (req, res) {
  res.status(201).send({ Version: 'Api version: 1.0.0' })
})
app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Api rodando no servidor, version: 1.0.0...`)
)

export default app
