const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  
   it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
   });

   it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
   });

   it('Should return the sum of rounded numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
