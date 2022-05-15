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

  test('Testing for update work /api/v1/work and get status 400 work not exist', (done) => {
    supertest(app)
      .patch('/api/v1/work')
      .set('Cookie', [`token= ${process.env.TOKEN}`])
      .send({
        id: 1000,
        title: 'test',
        content: 'test',
        image: 'test',
      })
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
  });

  test('Testing for update work /api/v1/work and get status 401 UnAuthorized', (done) => {
    supertest(app)
      .patch('/api/v1/work')
      .set('Cookie', [`token= ${process.env.TOKEN}`])
      .send({
        id: 1,
        title: 'test',
        content: 'test',
        image: 'test',
      })
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(401);
        done();
      });
  });

  // test('Testing for delete work /api/v1/work/1 and get status 200', (done) => {
  //   supertest(app)
  //     .delete('/api/v1/work/10')
  //     .set('Cookie', [`token= ${process.env.TOKEN}`])
  //     .expect(200)
  //     .end((err, res) => {
  //       if (err) done(err);
  //       expect(res.statusCode).toBe(200);
  //       done();
  //     });
  // });  
  test('Testing for delete work /api/v1/work/1000 and get status 400 work not exist', (done) => {
    supertest(app)
      .delete('/api/v1/work/1000')
      .set('Cookie', [`token= ${process.env.TOKEN}`])
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
  });

  test('Testing for delete work /api/v1/work/1 and get status 401 UnAuthorized', (done) => {
    supertest(app)
      .delete('/api/v1/work/1')
      .set('Cookie', [`token= ${process.env.TOKEN}`])
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(401);
        done();
      });
  });

  test('Testing for delete work /api/v1/work/1000 and get status 400 work not exist', (done) => {
    supertest(app)
      .delete('/api/v1/work/1000')
      .set('Cookie', [`token= ${process.env.TOKEN}`])
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
  });
  // test('Testing for update work /api/v1/work/1000 and get status 400 work not exist', (done) => {
  //   supertest(app)
  //     .patch('/api/v1/work/1000')
  //     .set('Cookie', [`token= ${process.env.TOKEN}`])
  //     .expect(400)
  //     .end((err, res) => {
  //       if (err) done(err);
  //       expect(res.statusCode).toBe(400);
  //       done();
  //     });
  // });

});



afterAll(() => sequelize.close());
