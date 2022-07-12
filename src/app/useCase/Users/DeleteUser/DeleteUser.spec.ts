import request from 'supertest'

import { app } from '../../../../app'
import prisma from '../../../../prisma/prisma'
import { User } from '../../../entities/User'

describe('Delete user', () => {
  let user: User
  let token: string

  beforeAll(async () => {
    const { body } = await request(app).post('/users').send({
      name: 'test user',
      email: 'user@test.com',
      isActive: true,
      admin: false,
      password: '123456'
    })
    user = body

    const response = await request(app).post('/login').send({
      email: user.email,
      password: user.password
    })

    token = response.body.token
  })

  afterAll(async () => {
    await prisma.user.deleteMany({})
  })

  it('should fail to delete user by invalid id', async () => {
    const response = await request(app)
      .delete(`/users/${user.id}12345`)
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toBe(400)
  })

  it('should delete user successfully', async () => {
    const response = await request(app)
      .delete(`/users/${user.id}`)
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toBe(202)
  })
})
