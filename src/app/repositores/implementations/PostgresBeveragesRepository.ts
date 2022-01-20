import { IBeverageRepository } from './../IBeveragesRepository'
import { Beverage } from './../../entities/Beverage'
import prisma from '../../../prisma/prisma'

export class PostgresBeveragesRepository implements IBeverageRepository {
  async findById(id: string): Promise<Beverage> {
    try {
      const beverage = await prisma.beverage.findUnique({ where: { id } })
      if (!beverage) throw new Error('Beverage not found')

      return beverage
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findByName(name: string): Promise<Beverage> {
    try {
      const beverage = await prisma.beverage.findUnique({ where: { name } })
      if (!beverage) throw new Error('Beverage not found')

      return beverage
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findMany(
    categories?: Array<string>,
    isActive?: boolean,
    name?: string
  ): Promise<Beverage[]> {
    try {
      let conditions = []

      categories && conditions.push({ categoryId: { equals: categories } })
      isActive && conditions.push({ isActive: { equals: isActive } })
      if (name) {
        const arrQuery = name.split(' ')
        conditions.push({ name: { hasEvery: arrQuery } })
      }

      const beverages = await prisma.beverage.findMany({
        where: {
          AND: conditions
        }
      })

      if (beverages.length < 1) throw new Error('No beverages found')

      return beverages
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async store(beverage: Beverage): Promise<void> {
    try {
      const { name, description, categories, imageUrl, isActive } = beverage

      await prisma.beverage.create({
        data: { name, description, categories, imageUrl, isActive }
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async update(id: string, beverage: Partial<Beverage>): Promise<void> {
    try {
      const { name, description, categories, imageUrl, isActive } = beverage

      await prisma.beverage.update({
        where: { id },
        data: { name, description, categories, imageUrl, isActive }
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.beverage.delete({ where: { id } })
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
