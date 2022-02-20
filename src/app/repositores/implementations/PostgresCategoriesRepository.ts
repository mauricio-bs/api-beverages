import prisma from '../../../prisma/prisma'
import { Category } from '../../entities/Category'
import { ICategoriesRepository } from './../ICategoriesRepository'
export class PostgresCategoriesRepository implements ICategoriesRepository {
  async findById(id: number): Promise<Category> {
    try {
      const category = await prisma.category.findUnique({ where: { id } })

      if (!category) throw new Error('Category not found')

      return category
    } catch (err) {
      throw new Error(err)
    }
  }

  async findByName(name: string): Promise<Category> {
    try {
      const category = await prisma.category.findFirst({ where: { name } })

      if (!category) throw new Error('Category not found')

      return category
    } catch (err) {
      throw new Error(err)
    }
  }

  async findMany(): Promise<Category[]> {
    try {
      const categories = await prisma.category.findMany()
      if (!categories.length) throw new Error('No categories found')

      return categories
    } catch (err) {
      throw new Error(err)
    }
  }

  async store(category: Category): Promise<void> {
    try {
      await prisma.category.create({ data: category })
    } catch (err) {
      throw new Error()
    }
  }

  async update(id: number, dataToUpdate: Partial<Category>): Promise<void> {
    try {
      await prisma.category.update({ where: { id }, data: dataToUpdate })
    } catch (err) {
      throw new Error(err)
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await prisma.category.delete({ where: { id } })
    } catch (err) {
      throw new Error(err)
    }
  }
}
