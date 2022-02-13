import { hash } from 'bcryptjs'

import prisma from '../../../prisma/prisma'
import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class PostgresUsersRepository implements IUsersRepository {
  async findById(id: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({ where: { id } })
      if (!user) throw new Error('User not found')

      return user
    } catch (err) {
      throw new Error(err)
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({ where: { email } })

      return user
    } catch (err) {
      throw new Error(err)
    }
  }

  async findMany(admin?: boolean, isActive?: boolean): Promise<User[]> {
    try {
      const users = await prisma.user.findMany({
        where: {
          AND: [
            { admin: { equals: admin } },
            { isActive: { equals: isActive } }
          ]
        }
      })

      return users
    } catch (err) {
      throw new Error(err)
    }
  }

  async store(user: User): Promise<void> {
    try {
      let { name, email, password, admin, isActive } = user

      password = await hash(password, 10)

      await prisma.user.create({
        data: { name, email, password, admin, isActive }
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async update(id: string, user: Partial<User>): Promise<void> {
    try {
      const { name, email, password, admin, isActive } = user

      await prisma.user.update({
        where: { id },
        data: { name, email, password, admin, isActive }
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.user.delete({ where: { id } })
    } catch (err) {
      throw new Error(err)
    }
  }
}
