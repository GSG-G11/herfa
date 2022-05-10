const request = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeAll(() => build());

describe('Test POST api/v1/work', () => {

  test('Testing for POST work /api/v1/work and get status 401 UnAuthorized', (done) => {
    request(app)
      .post('/api/v1/work')
      .set('Cookie', [`token= ${process.env.UnAuth_TOKEN}`])
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(401);
        done();
      })
  });

})

afterAll(() => sequelize.close());
