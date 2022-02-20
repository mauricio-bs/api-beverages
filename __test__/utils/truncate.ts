import prisma from '../../src/prisma/prisma'

export default function truncate() {
  return Promise.all(
    Object.keys(prisma).map(key => {
      return prisma[key].destroy({ truncate: true })
    })
  )
}
