/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'

import { app } from '../../../app'
import prisma from '../../../prisma/prisma'

describe('SignIn tests', () => {
  beforeAll(async () => {
    await prisma.user.createMany({
      data: [
        {
          name: 'test',
          email: 'test@test.com',
          password: '123456',
          isActive: true
        },
        {
          name: 'disabled user',
          email: 'disabled@test.com',
          password: '987654',
          isActive: false
        }
      ]
    })
  })

  afterAll(async () => {
    await prisma.user.deleteMany()
  })

  it('should sign in successfully', async () => {
    const response = await request(app).post('/login').send({
      email: 'test@test.com',
      password: '123456'
    })

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('token')
  })

  it('should fail to sign in with wrong email', async () => {
    const response = await request(app).post('/login').send({
      email: 'test@test.com.br',
      password: '123456'
    })

    expect(response.statusCode).toBe(400)
  })

  it('should fail to sign in with a disabled user credentials', async () => {
    const response = await request(app).post('/login').send({
      email: 'disabled@test.com',
      password: '987654'
    })

    expect(response.statusCode).toBe(400)
  })
})
