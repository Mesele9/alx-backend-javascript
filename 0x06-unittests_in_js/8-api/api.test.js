const expect = require('chai').expect;
const request = require('request');
const app = require('./api');

describe('Index page', function() {
  const url = 'http://localhost:7865'
  it('Should return correct status code', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Should return correct result', function(done) {
    request(url, function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

after(function() {
  app.close();
});
