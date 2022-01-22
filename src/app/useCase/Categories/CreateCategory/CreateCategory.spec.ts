import request from 'supertest'

import { factory } from '../../../../../__test__/factories'
import truncate from '../../../../../__test__/utils/truncate'
import { app } from '../../../../app'

describe('Create category: Units', () => {})

describe('Create category: Integrations', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should block duplicated category name', async () => {
    const category = factory.create('Category', {
      name: 'hot'
    })

    const response = await request(app).post('/category').send(category)

    expect(response.status).toBe(400)
  })

  it('should register a new category successfully', async () => {
    const category = factory.create('Category', {
      name: 'cold'
    })

    const response = await request(app).post('/category').send(category)

    expect(response.status).toBe(201)
  })
})
