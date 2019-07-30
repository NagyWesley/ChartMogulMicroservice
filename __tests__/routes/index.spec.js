const nock = require('nock');
const dotenv = require('dotenv');
const express = require('express');
const request = require('supertest');
const dataMock = require('./data');
const users = require('../../routes/users')(express);

dotenv.config(); // to use something else
const API_BASE = 'https://api.chartmogul.com';

const initUsers = () => {
  const app = express();
  app.use(users);
  return app;
};

describe('Users route test', () => {
  it('test index route', async () => {
    nock(API_BASE)
      .get('/v1/ping')
      .reply(200, { data: 'pong!' });

    const app = initUsers();
    const result = await request(app).get('/ping').then();

    expect(result.body).toEqual({ data: 'pong!' });
  });


  it('test create user route', async () => {
    nock(API_BASE)
      .post('/v1/customers')
      .reply(200, dataMock.createUserResponse);

    const app = initUsers();
    const result = await request(app).post('/add').then();

    expect(result.body).toEqual(dataMock.createUserResponse);
  });

  it.skip('test retrieve customer', async () => {
    nock(API_BASE)
      .get('/v1/customers')
      .query('cus_eaa30dc2-025c-11e7-9b58-5b5a8ca7dc6a')
      .reply(dataMock.createUserResponse);

    const app = initUsers();
    const result = await request(app).get('/retrieve').query({ userId: 1234 }).then();

    expect(result.body).toEqual(dataMock.createUserResponse);
  });
});
