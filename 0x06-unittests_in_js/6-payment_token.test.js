const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
  it('Should resolve with successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API'});
	done();
      })
      .catch(error => {
        done(error);
      });
  });

  it('Should resolve with undefined when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        expect(response).to.be.undefined;
	done();
      })
      .catch(error => {
        done(error);
      });
  });
});
