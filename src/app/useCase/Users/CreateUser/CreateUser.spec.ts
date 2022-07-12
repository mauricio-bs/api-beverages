import request from 'supertest'

import { app } from '../../../../app'
import prisma from '../../../../prisma/prisma'

describe('Create user', () => {
  afterAll(async () => {
    await prisma.user.deleteMany({})
  })
  it('should create a user successfully', async () => {
    const response = await request(app).post('/users').send({
      name: 'test success',
      email: 'test@test.com',
      isActive: true,
      password: '1234567'
    })

    expect(response.statusCode).toBe(201)
  })

  it('should create a disabled user', async () => {
    const response = await request(app).post('/users').send({
      name: 'test disabled',
      email: 'disabled@test.com',
      isActive: false,
      password: '1234567'
    })

    expect(response.statusCode).toBe(201)
  })

  it('should create a admin user', async () => {
    const response = await request(app).post('/users').send({
      name: 'test admin',
      email: 'admin@test.com',
      isActive: true,
      admin: true,
      password: '1234567'
    })

    expect(response.statusCode).toBe(201)
  })

  it('should fail to create a user with invalid email', async () => {
    const response = await request(app).post('/users').send({
      name: 'invalid email',
      email: 'usertest.com',
      isActive: true,
      admin: true,
      password: '1234567'
    })

    expect(response.statusCode).toBe(400)
  })

  it('should fail to create user with duplicated email', async () => {
    await request(app).post('/users').send({
      name: 'test',
      email: 'duplicated@test.com',
      isActive: true,
      password: '1234567'
    })

    const response = await request(app).post('/users').send({
      name: 'test',
      email: 'duplicated@test.com',
      isActive: true,
      password: '1234567'
    })

    expect(response.statusCode).toBe(400)
  })
})
