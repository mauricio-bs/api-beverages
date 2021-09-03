import express from 'express'
import https from 'https'

import routes from './routes'
import './database'

class App {
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(https())
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
