import { Router } from 'express'

// Session
import auth from './app/middlewares/auth'
import { signInController } from './app/useCase/Session'
// User
import { createUserController } from './app/useCase/Users/CreateUser'
import { deleteUserController } from './app/useCase/Users/DeleteUser'
import { findManyUsersController } from './app/useCase/Users/FindManyUsers'
import { findOneUserController } from './app/useCase/Users/FindOneUser'
import { updateUserController } from './app/useCase/Users/UpdateUser'

const routes = Router()

// SignIn
routes.post('/login', (req, res) => signInController.handle(req, res))

// Create User
routes.post('/users', (req, res) => createUserController.handle(req, res))

routes.use(auth)

// Users
routes.get('/users', (req, res) => findManyUsersController.handle(req, res))
routes.get('/users/:id', (req, res) => findOneUserController.handle(req, res))
routes.put('/users/:id', (req, res) => updateUserController.handle(req, res))
routes.delete('/users/:id', (req, res) => deleteUserController.handle(req, res))

// Beverages
// routes.get('/api/beverages', BeverageController.index)
// routes.get('/api/beverages/:id', BeverageController.show)
// routes.post('/api/beverages', BeverageController.store)
// routes.put('/api/beverages/:id', BeverageController.update)
// routes.delete('/api/beverages/:id', BeverageController.delete)

export default routes
