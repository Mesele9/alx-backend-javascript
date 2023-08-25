const expect = require('chai').expect;
const request = require('request');
const server = require('./api');

describe('Index page', function() {
  it('Should return correct status code', function(done) {
    request.get('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Should return correct result', function(done) {
    request.get('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  it('Should return correct status code when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    })
  })

  it('Should return 404 status code when :id is not a number', function(done) {
    request.get('http://localhost:7865/cart/hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Should return correct result when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

describe('/available_payments endpoint', function() {
  it('Should return correct payment methhods', function(done) {
    request.get('http://localhost:7865/available_payments', function(error, response,body) {
      const expectedPaymentMethods = {
        payment_methods: {
	  credit_cards: true,
          paypal: false
	}
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});

describe('/login endpoint', function() {
  it('Should return a welcome message with theusername', function(done) {
    const username = 'Betty';
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: username }
      },
      function(error, response, body) {
        expect(body).to.equal(`Welcome ${username}`);
        done();
      }
    );
  });
});

after(function() {
  server.close();
});
