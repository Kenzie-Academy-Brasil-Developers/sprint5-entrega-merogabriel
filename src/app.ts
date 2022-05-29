import express from 'express'
import router from './routers'
import { AppDataSource } from './data-source'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/', router)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected.')

    app.listen(process.env.PORT, () => {
      console.log(`App running!\nhttp://localhost:${process.env.PORT}/`)
    })
  })
  .catch((err) => {
    console.error(err)
  })

export default app
