const nock = require('nock');
const dotenv = require('dotenv');
const express = require('express');
const request = require('supertest');
const users = require('../../routes/users')(express);

dotenv.config(); // to use something else
const API_BASE = 'https://api.chartmogul.com';

const initUsers = () => {
  const app = express();
  app.use(users);
  return app;
};

describe('Index route test', () => {
  it('test index route', async () => {
    nock(API_BASE)
      .get('/v1/ping')
      .reply(200, { data: 'pong!' });

    const app = initUsers();
    const result = await request(app).get('/ping').then();

    expect(result.body).toEqual({ data: 'pong!' });
  });
});
