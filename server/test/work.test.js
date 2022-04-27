const supertest = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeAll(() => build());

describe('Routes Tests GET /api/v1/work/:providerId', () => {
  test('Testing for /api/v1/work/4 and get status 200', (done) => {
    supertest(app)
      .get('/api/v1/work/4?page=1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('Testing for /api/v1/work/4 and get status 400', (done) => {
    supertest(app)
      .get('/api/v1/work/4?page=a')
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
  });


});

afterAll(() => sequelize.close());
