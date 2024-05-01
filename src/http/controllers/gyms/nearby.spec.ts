import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/create-and-authenticate-user'

describe('Nearby Gyms (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to list nearby gyms', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'JavaScript Gym',
      description: 'Some description',
      phone: '1199999999',
      latitude: -20.8273545,
      longitude: -49.3896725
    })

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'TypeScript Gym',
      description: 'Some description',
      phone: '1199999999',
      latitude: -27.0610928,
      longitude: -49.6401091
    })

    const response = await request(app.server)
      .get('/gyms/nearby')
      .query({
        latitude: -20.8273545,
        longitude: -49.3896725
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'JavaScript Gym'
      })
    ])
  })
})
