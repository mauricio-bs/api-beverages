import { Category } from './../entities/Category'

export interface ICategoriesRepository {
  // Unique searches
  findById(id: number): Promise<Category>
  findByName(name: string): Promise<Category>
  // Massive Searches
  findMany(): Promise<Category[]>
  // Save
  store(name: string, imageUrl: string): Promise<void>
  // Update
  update(id: number, dataToUpdate: Category): Promise<void>
  // Delete
  delete(id: number): Promise<void>
}
