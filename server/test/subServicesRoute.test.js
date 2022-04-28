const supertest = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeAll(() => build());

describe('Routes Tests GET /api/v1/subservices/:mainServiceId', () => {
  test('Test for /api/v1/subservices/1 with status code 200', (done) => {
    supertest(app)
      .get('/api/v1/subservices/1')
      .expect(200)
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('Test for /api/v1/subservices/1 when valid params have response with the data with msg', (done) => {
    supertest(app)
      .get('/api/v1/subservices/1')
      .expect(200)
      .end((error, response) => {
        if (error) done(error);
        const receivedData = response.body;
        expect(receivedData.hasOwnProperty('data')).toBe(true);
        expect(receivedData.msg).toBe('Sub Services for the main service 1');
        const { msg , data } = response.body;
        expect(data[0].id).toBe(1);
        expect(data[0].name).toBe('الحدادة العامة');
        done();
      });
  });

  test('Test for /api/v1/subservices/2 with validation error', (done) => {
    supertest(app)
      .get('/api/v1/subservices/string')
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400);
        const {msg, status} = response.body;
        expect(msg).toBe('"id" must be a number');
        done();
      });
  });

  test('Test for /api/v1/subservices/15 when main service does not exist', (done) => {
    supertest(app)
      .get('/api/v1/subservices/15')
      .end((error, response) => {
        if (error) done(error);
        const {msg, status} = response.body;
        expect(msg).toBe('This Main Service does not exist');
        expect(status).toBe(400);
        done();
      });
  });
});

afterAll(() => sequelize.close());
