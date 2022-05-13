const request = require('supertest');
const app = require('../app');
const { build } = require('../database/seeders');
const { sequelize } = require('../database/config');
const userTest = {
  first_name: 'صالح',
  last_name: 'معروف',
  email: 'test@hotmail.com',
  password: 'saleh123133255',
  phone: '0599999999',
  whatsapp: '00972599999999',
  locationId: 1,
  description: 'صالح معروف خريج هندسة الحاسوب من الجامعة الإسلامية بغزة',
  facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
  instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  mainServiceId: 1,
  // subservice:[1],
};

beforeAll(() => build());

describe('Test POST api/v1/signup', () => {

  test('Post /api/v1/signup return with status code equal 201 created', (done) => {
    request(app)
      .post('/api/v1/signup')
      .expect(201)
      .send(userTest)
      .end((error, response) => {
        if (error){
          console.log(error);
          return done(error);
        } 
        expect(response.statusCode).toBe(201);
        expect(response.type).toBe('application/json');
        expect(response.body.data.providerName).toBe('صالح معروف');
        done();
      })
  });
  test('Post /api/v1/signup return with status code equal 400 duplicated Email', (done) => {
    request(app)
      .post('/api/v1/signup')
      .expect(400)
      .send(userTest)
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400);
        expect(response.body.msg).toBe('Email is used try another one');
        done();
      })
  });
  test('Post /api/v1/signup return with status code equal 400 duplicated Phone', (done) => {
    request(app)
      .post('/api/v1/signup')
      .expect(400)
      .send({...userTest, email: 'saleh@hotmail.com'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400);
        expect(response.body.msg).toBe('Phone is used try another one');
        done();
      })
  });
  test('Post /api/v1/signup return with status code equal 400 invalid email ', (done) => {
    request(app)
      .post('/api/v1/signup')
      .expect(400)
      .send({...userTest, email: 'saleh.com'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400);
        expect(response.body.msg).toBe('\"email\" must be a valid email');
        done();
      })
  });
  test('Post /api/v1/signup return with status code equal 400 without first name ', (done) => {
    request(app)
      .post('/api/v1/signup')
      .expect(400)
      .send({email: 'fadi@gmail.com', password: '1234'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400)
        expect(response.body.msg).toBe('"first_name" is required');
        done();
      })
  });
  test('Post /api/v1/signup return with status code equal 400 with invalid password ', (done) => {
    request(app)
      .post('/api/v1/signup')
      .expect(400)
      .send({...userTest, password: '1234'})
      .end((error, response) => {
        if (error) done(error);
        expect(response.statusCode).toBe(400)
        expect(response.body.msg).toBe("\"password\" with value \"1234\" fails to match the required pattern: /^[a-zA-Z0-9]{8,30}$/");
        done();
      })
  });
})

afterAll(() => sequelize.close());
