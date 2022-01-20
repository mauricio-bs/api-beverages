import { User } from '../entities/User'

export interface IUsersRepository {
  // Searches
  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
  // Massive Search
  findMany(admin?: boolean, isActive?: boolean): Promise<User[]>
  // Save
  store(user: User): Promise<void>
  // Update
  update(id: string, user: Partial<User>): Promise<void>
  // Delete
  delete(id: string): Promise<void>
}
