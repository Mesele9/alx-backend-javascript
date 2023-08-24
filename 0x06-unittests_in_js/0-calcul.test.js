const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
