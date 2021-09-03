import { Router } from 'express'
// Controller
import BeverageController from './app/controller/BeverageController'
import UserController from './app/controller/UserController'
import SessionController from './app/controller/SessionController'

import auth from './app/middlewares/auth'

const routes = Router()

routes.post('/api', SessionController.store)

routes.use(auth)

routes.get('/api/users', UserController.index)
routes.get('/api/users/:id', UserController.show)
routes.post('/api/users', UserController.store)
routes.put('/api/users/:id', UserController.update)
routes.delete('/api/users/:id', UserController.delete)

// Beverages
routes.get('/api/beverages', BeverageController.index)
routes.get('/api/beverages/:id', BeverageController.show)
routes.post('/api/beverages', BeverageController.store)
routes.put('/api/beverages/:id', BeverageController.update)
routes.delete('/api/beverages/:id', BeverageController.delete)

export default routes
