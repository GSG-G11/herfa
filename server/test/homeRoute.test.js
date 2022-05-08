const request = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeEach(() => build());

describe('Test GET /', () => {

  test('Get /api/v1/ return with status code equal 200 ', (done) => {
    request(app)
      .get('/api/v1/')
      .expect(200)
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(200);        expect(response.type).toBe('application/json');
        done();
      })
  });

  test('Get /api/v1/ return a json file and 3 result as body', (done) => {
    request(app)
      .get('/api/v1/')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error);
        expect(response.type).toBe('application/json');
        expect(response.body.msg).toBe('Home Data');
        const receivedData = response.body.data;
        expect(receivedData.hasOwnProperty('location')).toBe(true);
        expect(receivedData.hasOwnProperty('services')).toBe(true);
        expect(receivedData.hasOwnProperty('topTenReviews')).toBe(true)
        done();
      })
  });

  test('Get /api/v1/ return all the location data => length location equal 12', (done) => {
    request(app)
      .get('/api/v1/')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error);
        const receivedData = response.body.data;
        expect(receivedData.location.length).toBe(12);
        done();
      })
  });

  test('Get /api/v1/ return all the top 10 reviews data => rate = 5 and length >= 10', (done) => {
    request(app)
      .get('/api/v1/')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error);
        const receivedData = response.body.data;
        expect(receivedData.topTenReviews.length).toBeLessThan(11);
        expect(receivedData.topTenReviews).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ rate: 5 }),
          ])
        );
        done();
      })
  });

  test('Get /api/v1/ return all the main services data => length 10 ', (done) => {
    request(app)
      .get('/api/v1/')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error);
        const receivedData = response.body.data;
        expect(receivedData.services.length).toBe(10);
        expect(receivedData.services[0].name).toBe('الحدادة');
        done();
      })
  });

});

afterAll(() => sequelize.close());
