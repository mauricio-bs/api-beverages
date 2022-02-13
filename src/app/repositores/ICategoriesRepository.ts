import { Category } from './../entities/Category'

export interface ICategoriesRepository {
  // Unique searches
  findById(id: number): Promise<Category>
  findByName(name: string): Promise<Category>
  // Massive Searches
  findMany(): Promise<Category[]>
  // Save
  store(category: Category): Promise<void>
  // Update
  update(id: number, dataToUpdate: Partial<Category>): Promise<void>
  // Delete
  delete(id: number): Promise<void>
}
