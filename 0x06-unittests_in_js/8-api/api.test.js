const expect = require('chai').expect;
const request = require('request');
const server = require('./api');

describe('Index page', function() {
  it('Should return correct status code', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Should return correct result', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

after(function() {
  server.close();
});
