import cors from 'cors'
import express from 'express'
import versionList from './routes/indexRoutes'

const PORT = 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', versionList)

app.listen(PORT, () => {
  console.log(`Server running at port  mode`)
})
export default app
