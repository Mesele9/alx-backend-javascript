const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;
  
  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('Should log the correct message and be called for 100 and 200', function() {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('Should log the correct message and be called once for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
