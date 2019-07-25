const nock = require('nock');
const dotenv = require('dotenv');
const express = require('express');
const request = require('supertest');
const users = require('../../routes/users')(express);

dotenv.config(); // to use something else

const initUsers = () => {
  const app = express();
  app.use(users);
  return app;
};

describe('Index route test', () => {
  it('test index route', async () => {
    nock('https://api.chartmogul.com/')
      .get('/v1/ping')
      .reply(200, {
        results: [{ data: 'pong!' }],
      });


    const app = initUsers();
    const result = await request(app).get('/ping').then();

    expect(result.body.results[0]).toEqual({ data: 'pong!' });
  });
});
