/* eslint-disable */

const supertest = require('supertest');
const app = require('../app');
const testData = require('./testData');


describe('Routes Tests', () => {
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
        expect(res.body.data.user.first_name).toBe(testData.user.first_name);
        expect(res.body.data.user.email).toBe(testData.user.email);
        expect(res.body.data.user.phone).toBe(testData.user.phone);
        expect(res.body.data.user.locationId).toBe(testData.user.locationId);
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
        expect(res.body.data.hasOwnProperty('locations')).toEqual(true);
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
  test('Testing for /api/v1/providers to get 404 page not found', (done) => {
    supertest(app)
      .get('/api/v1/providers')
      .expect(404)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.status).toEqual(404);
        done();
      });
  });
  test('Testing for /api/v1/providers to get 500 Internal Server Error', (done) => {
    supertest(app)
      .get('/api/v1/providers/88888888887')
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.status).toEqual(400);
        done();
      });
  });
});
