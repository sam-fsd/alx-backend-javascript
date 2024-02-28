const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumbers', function () {
  it('should return the sum of two numbers', function () {
    assert.equal(calculateNumber(5, 5), 10);
  });
  it('should return rounded up number', function () {
    assert.equal(calculateNumber(5.5, 5.5), 12);
  });
  it('for negative number the floating point should be > 5 to be rounded to nearest whole number', function () {
    assert.strictEqual(calculateNumber(-5.5, -5.5), -10);
  });
  it('for negative number the floating point should be > 5 to be rounded to nearest whole number', function () {
    assert.strictEqual(calculateNumber(-5.6, -5.6), -12);
  });
});
