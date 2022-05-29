import express from 'express'
import router from './routers'
import { AppDataSource } from './data-source'

const app = express()

const PORT = 3000

app.use(express.json())
app.use('/', router)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected.')

    app.listen(PORT, () => {
      console.log(`App running!\nhttp://localhost:${PORT}/`)
    })
  })
  .catch((err) => {
    console.error(err)
  })

export default app
