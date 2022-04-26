const supertest = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');

beforeAll(() => build());

describe('Routes Tests Post /api/v1/reviews', () => {
  test('Testing for /api/v1/review and get status 201 created successfully', (done) => {
    supertest(app)
      .post('/api/v1/reviews')
      .expect(201)
      .send({
        userId: 1,
        phone: '+254712345678',
        rate: 5,
        content: 'Good service',
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(201);
        expect(res.body.msg).toBe('Review added successfully');
        done();
      });
  });
  test('RE-review user from same phone number', (done) => {
    supertest(app)
      .post('/api/v1/reviews')
      .expect(400)
      .send({
        userId: 1,
        phone: '+254712345678',
        rate: 5,
        content: 'Good service',
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        expect(res.body.msg).toBe('You have already reviewed this user');
        done();
      });
  });
  test('test if data inserted match the sent data', (done) => {
    const review = {
      userId: 2,
      phone: '+25471234555678',
      rate: 5,
      content: 'Good service',
    };
    supertest(app)
      .post('/api/v1/reviews')
      .expect(201)
      .send(review)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data).toMatchObject(review);
        done();
      });
  });
  test('Testing with not existed user and get status 400 and get user does not exist message', (done) => {
    supertest(app)
      .post('/api/v1/reviews')
      .expect(400)
      .send({
        userId: 1222222,
        phone: '+254712345678',
        rate: 5,
        content: 'Good service',
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        expect(res.body.msg).toBe('user does not exist');
        done();
      });
  });
  test('Testing for /api/v1/review with not existed user and get status 400', (done) => {
    supertest(app)
      .post('/api/v1/reviews')
      .expect(400)
      .send({
        userId: 122222222222222222222,
        rate: 5,
        content: 'Good service',
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
  });
  test('Testing for /api/v1/review and get status 400 RE-review', (done) => {
    supertest(app)
      .post('/api/v1/reviews')
      .expect(400)
      .send({
        userId: 9,
        rate: 5,
        phone: '0597899512',
        content: 'Good service',
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
  });
});
afterAll(() => sequelize.close());
