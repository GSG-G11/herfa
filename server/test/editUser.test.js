const request = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');
const userTest = {
  phone: '9999999999',
  whatsapp: '99999999999',
  locationId: 1,
  description: 'صالح معروف خريج هندسة الحاسوب من الجامعة الإسلامية بغزة',
  mainServiceId: 1,
  subservice:[1],
};

beforeAll(() => build());

describe('Test POST api/v1/provider/:id', () => {

  test('PATCH /api/v1/provider/1 return with status code equal 200 created', (done) => {
    request(app)
      .patch('/api/v1/provider/1')
      .expect(200)
      .send(userTest)
      .set('Cookie', [`token= ${process.env.USER_TOKEN}`])
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        done();
      })
  });

  test('PATCH /api/v1/provider/1 return with status code equal 401 unAuth', (done) => {
    request(app)
      .patch('/api/v1/provider/1')
      .expect(401)
      .send(userTest)
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(401);
        expect(response.type).toBe('application/json');
        done();
      })
  });


})

afterAll(() => sequelize.close());
