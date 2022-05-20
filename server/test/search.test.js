// http://localhost:3030/api/v1/provider/?name=صالح&location=1&service=1&subservice=1,2,3&page=1
const supertest = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeAll(() => build());

describe('Search result  http://localhost:3030/api/v1/provider/?q= ', () => {
  test('search by location location 1 to get status 200 and user\'s location = 1', (done) => {
    supertest(app)
      .get('/api/v1/provider/?location=1&page=1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.data[0].locationId).toBe(1);
        done();
      });
  });
  test('search by location location "S" to get status 400 location not valid', (done) => {
    supertest(app)
      .get('/api/v1/provider/?location=s&page=1')
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        expect(res.body.msg).toBe('"location" must be a number');
        done();
      });
  });
  test('search by location location 188 to get status 200 and result count = 0', (done) => {
    supertest(app)
      .get('/api/v1/provider/?location=188&page=1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.count).toBe(0);
        done();
      });
  });
  test('search by location', (done) => {
    supertest(app)
      .get('/api/v1/provider/?location=2&page=1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.data[0].locationId).toBe(2);
        done();
      });
  });
  test('search by service with value 2 => status 200, user\s service = 2', (done) => {
    supertest(app)
      .get('/api/v1/provider/?service=2&page=1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.data[0].mainServiceId).toBe(2);
        done();
      });
  });
  test('search by service with value "S" to get status 400 service not valid', (done) => {
    supertest(app)
      .get('/api/v1/provider/?service=S&page=1')
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        expect(res.body.msg).toBe('"service" must be a number');
        done();
      });
  });
  test('search by service with value 188 to get status 200 and result count = 0', (done) => {
    supertest(app)
      .get('/api/v1/provider/?service=188&page=1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.count).toBe(0);
        done();
      });
  });
  test('search by service and location with value 1 & 1  to get status 200 and result count = 1', (done) => {
    supertest(app)
      .get('/api/v1/provider/?service=1&location=1&page=1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.count).toBe(2);
        done();
      });
  });
});
afterAll(() => sequelize.close());

        