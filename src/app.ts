import cors from 'cors'
import express from 'express'
import { createServer } from 'http'

import routes from './routes'
require('dotenv').config({
  path: process.env.NOVE_ENV === 'test' ? '.env.test' : '.env'
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: '*'
  })
)

app.use(routes)

const httpServer = createServer(app)

export { app, httpServer }
