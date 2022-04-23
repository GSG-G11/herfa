const request = require('supertest');
const app = require('../app');

describe('Test GET /home', () => {

  test('Get /api/v1/home return with status code equal 200 ', (done) => {
    request(app)
      .get('/api/v1/home')
      .expect(200)
      .end((error, response) => {
        if (error) done(error)
        expect(response.statusCode).toBe(200);
        done();
      })
  });

  test('Get /api/v1/home return a json file and 3 result as body', (done) => {
    request(app)
      .get('/api/v1/home')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error)
        expect(response.type).toBe('application/json');
        expect(response.body.data.hasOwnProperty('location')).toBe(true);
        expect(response.body.data.hasOwnProperty('services')).toBe(true);
        expect(response.body.data.hasOwnProperty('topTenReviews')).toBe(true);
        done();
      })
  });

  test('Get /api/v1/home return all the location data => length location equal 12', (done) => {
    request(app)
      .get('/api/v1/home')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error)
        expect(response.body.data.location.length).toBe(12);
        done();
      })
  });

  test('Get /api/v1/home return all the top 10 reviews data => rate = 5 and length >= 10', (done) => {
    request(app)
      .get('/api/v1/home')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error)
        expect(response.body.data.topTenReviews.length).toBeLessThan(11);
        expect(response.body.data.topTenReviews).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ rate: 5 }),
          ])
        );
        done();
      })
  });

  test('Get /api/v1/home return all the main services data => length 10 ', (done) => {
    request(app)
      .get('/api/v1/home')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) done(error)
        expect(response.body.data.services.length).toBe(10);
        expect(response.body.data.services[0].name).toBe('الحدادة');
        done();
      })
  });

});

