import { User } from '../entities/User'

export interface IUsersRepository {
  // Searches
  findById(id: string): Promise<Partial<User> | null>
  findByEmail(email: string): Promise<User | null>
  // Massive Search
  findMany(admin?: boolean, isActive?: boolean): Promise<User[] | null>
  // Save
  store(user: User): Promise<void>
  // Update
  update(id: string, user: Partial<User>): Promise<void>
  // Delete
  delete(id: string): Promise<void>
}
