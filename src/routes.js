import { Router } from 'express'
// Controller
import BeverageController from './app/controller/BeverageController'

const app = Router()

// Find all Beverages
app.get('/api/beverages', BeverageController.index)
// Find one beverage
app.get('/api/beverages/:id', BeverageController.show)
// New Beverage
app.post('/api/beverages', BeverageController.store)
// Update bevarage
app.put('/api/beverages/:id', BeverageController.update)
// Delete beverage
app.delete('/api/beverages/:id', BeverageController.delete)
