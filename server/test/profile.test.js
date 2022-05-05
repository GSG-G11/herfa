const supertest = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeAll(() => build());

describe('Routes Tests GET /api/v1/providers/:id', () => {
  test('Testing for /api/v1/providers/1 and get status 200', (done) => {
    supertest(app)
      .get('/api/v1/providers/1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('Testing for /api/v1/providers/1 to make sure that the requested user is the same as the user in the response   ', (done) => {
    supertest(app)
      .get('/api/v1/providers/1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.user.id).toBe(1);
        done();
      });
  });
  test('Testing for /api/v1/providers/1 to ensure that the response contains user data ', (done) => {
    supertest(app)
      .get('/api/v1/providers/1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.user.hasOwnProperty('first_name')).toBe(true);
        expect(res.body.data.user.hasOwnProperty('email')).toBe(true);
        expect(res.body.data.user.hasOwnProperty('phone')).toBe(true);
        done();
      });
  });
  test('Testing for /api/v1/providers/1 to ensure that the response contains works data relates to userId:1', (done) => {
    supertest(app)
      .get('/api/v1/providers/1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.hasOwnProperty('works')).toEqual(true);
        done();
      });
  });
  test('Testing for /api/v1/providers/1 to ensure that the response contains locations data relates to userId:1', (done) => {
    supertest(app)
      .get('/api/v1/providers/1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.user.hasOwnProperty('location')).toBe(true);
        expect(res.body.data.user.location.id).toBe(
          res.body.data.user.locationId
        );
        done();
      });
  });
  test('Testing for /api/v1/providers/1 to ensure that the response contains reviews data relates to userId:1', (done) => {
    supertest(app)
      .get('/api/v1/providers/1')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.hasOwnProperty('reviews')).toEqual(true);
        done();
      });
  });
  test('Testing for /api/v1/providers/1 to get 400 for bad request id params with message validation error', (done) => {
    supertest(app)
      .get('/api/v1/providers/f')
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('"id" must be a number');
        done();
      });
  });
  
  test('Testing for /api/v1/providers/:100 to get 404 page not found', (done) => {
    supertest(app)
      .get('/api/v1/providers/88888888888888888')
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.status).toEqual(400);
        done();
      });
  });
});
afterAll(() => sequelize.close());
