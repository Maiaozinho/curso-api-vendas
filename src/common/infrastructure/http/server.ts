import { env } from '../env'
import { dataSource } from '../typeorm'
import { app } from './app'

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server is runing on ${env.PORT}!😎`)
      console.log(`API docs avaliable in GET /docs🗂️`)
    })
  })
  .catch(error => {
    console.error('Error initializing data source:', error)
  })
