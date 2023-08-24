const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
  it('Should call Utils.calculateNumber with correct argument', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
