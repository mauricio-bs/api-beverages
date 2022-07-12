import { httpServer } from './app'
require('dotenv/config')

httpServer.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
  console.log('environment: ', process.env.NODE_ENV)
})
