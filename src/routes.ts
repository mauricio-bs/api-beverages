import { Router } from 'express'

// Middlewares
import auth from './app/middlewares/auth'
// Beverages
import { createBeverageController } from './app/useCase/Beverages/CreateBeverages'
import { deleteBeverageController } from './app/useCase/Beverages/DeleteBeverage'
import { findManyBeverageController } from './app/useCase/Beverages/FindManyBeverages'
import { findOneBeverageController } from './app/useCase/Beverages/FindOneBeverage'
import { updateBeverageController } from './app/useCase/Beverages/UpdateBeverages'
// Category
// import { createCategoryController } from './app/useCase/Categories/CreateCategory'
// Session
import { signInController } from './app/useCase/Session'
// User
import { createUserController } from './app/useCase/Users/CreateUser'
import { deleteUserController } from './app/useCase/Users/DeleteUser'
import { findManyUsersController } from './app/useCase/Users/FindManyUsers'
import { findOneUserController } from './app/useCase/Users/FindOneUser'
import { updateUserController } from './app/useCase/Users/UpdateUser'
// Images Upload
import upload from './config/multer'

const routes = Router()

// SignIn
routes.post('/login', (req, res) => signInController.handle(req, res))

// Create User
routes.post('/users', (req, res) => createUserController.handle(req, res))

routes.use(auth)

// Users
routes.get('/users', (req, res) => findManyUsersController.handle(req, res))
routes.get('/users/:userId', (req, res) =>
  findOneUserController.handle(req, res)
)
routes.put('/users/:userId', (req, res) =>
  updateUserController.handle(req, res)
)
routes.delete('/users/:userId', (req, res) =>
  deleteUserController.handle(req, res)
)

// Beverages
routes.get('/beverages', (req, res) =>
  findManyBeverageController.handle(req, res)
)
routes.get('/beverages/:beverageId', (req, res) =>
  findOneBeverageController.handle(req, res)
)
routes.post('/beverages', upload.single('file'), (req, res) =>
  createBeverageController.handle(req, res)
)
routes.put('/beverages/:beverageId', upload.single('file'), (req, res) =>
  updateBeverageController.handle(req, res)
)
routes.delete('/beverages/:beverageId', (req, res) =>
  deleteBeverageController.handle(req, res)
)

// Category
// routes.post('/category', upload.single('category'), (req, res) =>
//   createCategoryController.handle(req, res)
// )

export default routes
