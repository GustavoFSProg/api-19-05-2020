import cors from 'cors'
import express from 'express'
import versionList from './routes/indexRoutes'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

let port = process.env.PORT

if (port == null || port === '') {
  port = 8000
}

app.use(express.json())
app.use(cors())
app.use('/', versionList)

app.listen(port, () => {
  // console.log(`Server running at port  mode`)
})
export default app
