import { Router } from 'express'
// Session
import { signInController } from './app/useCase/Session'
// User
import { createUserController } from './app/useCase/Users/CreateUser'
import { updateUserController } from './app/useCase/Users/UpdateUser'
import { deleteUserController } from './app/useCase/Users/DeleteUser'
import { findOneUserController } from './app/useCase/Users/FindOneUser'
import { findManyUsersController } from './app/useCase/Users/FindManyUsers'

import auth from './app/middlewares/auth'

const routes = Router()

// SignIn
routes.post('/api', signInController.handle)

// Create User
routes.post('/api/users', createUserController.handle)

routes.use(auth)

// Users
routes.get('/api/users', findManyUsersController.handle)
routes.get('/api/users/:id', findOneUserController.handle)
routes.put('/api/users/:id', updateUserController.handle)
routes.delete('/api/users/:id', deleteUserController.handle)

// Beverages
// routes.get('/api/beverages', BeverageController.index)
// routes.get('/api/beverages/:id', BeverageController.show)
// routes.post('/api/beverages', BeverageController.store)
// routes.put('/api/beverages/:id', BeverageController.update)
// routes.delete('/api/beverages/:id', BeverageController.delete)

export default routes
