import { Beverage } from './../entities/Beverage'

export interface IBeverageRepository {
  // Searches
  findById(id: string): Promise<Beverage>
  findByName(name: string): Promise<Beverage>
  // Massive Search
  findMany(
    categories?: Array<string>,
    isActive?: boolean,
    name?: string
  ): Promise<Beverage[]>
  // Save
  store(beverage: Beverage): Promise<void>
  // Update
  update(id: string, Beverage: Partial<Beverage>): Promise<void>
  // Delete
  delete(id: string): Promise<void>
}
