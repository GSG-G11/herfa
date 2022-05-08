const request = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeAll(() => build());

describe('Test POST api/v1/login', () => {

  test('Post /api/v1/login return with status code equal 200 ', (done) => {
    request(app)
      .post('/api/v1/login')
      .expect(200)
      .send({email: 'abdallah897107@gmail.com', password: '12345678'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        done();
      })
  });
  test('Post /api/v1/login return with status code equal 400 with invalid email ', (done) => {
    request(app)
      .post('/api/v1/login')
      .expect(400)
      .send({email: 'abdallah897107gmail.com', password: '12345678'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400);
        expect(response.body.msg).toBe('\"email\" must be a valid email');
        done();
      })
  });
  test('Post /api/v1/login return with status code equal 400 with invalid password ', (done) => {
    request(app)
      .post('/api/v1/login')
      .expect(400)
      .send({email: 'abdallah897107@gmail.com', password: '1234'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400)
        expect(response.body.msg).toBe("\"password\" with value \"1234\" fails to match the required pattern: /^[a-zA-Z0-9]{8,30}$/");
        done();
      })
  });
  test('Post /api/v1/login return with status code equal 401 with incorrect email or password ', (done) => {
    request(app)
      .post('/api/v1/login')
      .expect(401)
      .send({email: 'abdallah89710@gmail.com', password: '123456789'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(401);
        expect(response.body.msg).toBe("incorrect password or email ...");
        done();
      })
  });
})

afterAll(() => sequelize.close());
