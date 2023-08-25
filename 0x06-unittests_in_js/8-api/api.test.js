const expect = require('chai').expect;
const request = require('request');
const server = require('./api');

describe('Index page', function() {
  it('Should return correct status code', async function() {
    await request.get('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('Should return correct result', async function() {
    await request.get('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
    });
  });

  after(async function() {
    await server.close();
  });
});
