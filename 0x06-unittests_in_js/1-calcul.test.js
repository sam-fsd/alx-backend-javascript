const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculteNumbers where type = SUM', function () {
  it('should return the sum of two numbers', function () {
    assert.equal(calculateNumber('SUM', 5, 5), 10);
  });
  it('should return rounded up number', function () {
    assert.equal(calculateNumber('SUM', 5.5, 5.5), 12);
  });
  it('for negative number the floating point should be > 5 to be rounded to nearest whole number', function () {
    assert.strictEqual(calculateNumber('SUM', -5.5, -5.5), -10);
  });
  it('for negative number the floating point should be > 5 to be rounded to nearest whole number', function () {
    assert.strictEqual(calculateNumber('SUM', -5.6, -5.6), -12);
  });
});

describe('calculteNumbers where type = SUBTRACT', function () {
  it('should return the difference of two numbers', function () {
    assert.equal(calculateNumber('SUBTRACT', 5, 5), 0);
  });
  it('should return rounded up number', function () {
    assert.equal(calculateNumber('SUBTRACT', 5.5, 7.5), -2);
  });
  it('should not round of if floating point of a negative number is < 5', function () {
    assert.equal(calculateNumber('SUBTRACT', -8.5, 2.8), -11);
  });
  it('should round of if floating point of a negative number is > 5', function () {
    assert.equal(calculateNumber('SUBTRACT', -8.6, 2.8), -12);
  });
});

describe('calculateNumbers where type = DIVIDE', function () {
  it('should return the divsion of rounded up numbers', function () {
    assert.equal(calculateNumber('DIVIDE', 9.5, 5.3), 2);
  });
  it('should return error if b is 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0.4), 'Error');
  });
  it('should return positive value for two negative inputs', function () {
    assert.equal(calculateNumber('DIVIDE', -9.6, -5.3), 2);
  });
  it('should not round of if floating point of a negative number is < 5', function () {
    assert.equal(calculateNumber('DIVIDE', -8.5, 2.8), -2.6666666666666665);
  });
  it('should round of if floating point of a negative number is > 5', function () {
    assert.equal(calculateNumber('DIVIDE', -8.6, 2.8), -3);
  });
  it('should return negative number for one negative input', function () {
    assert.equal(calculateNumber('DIVIDE', -8.6, 2.8), -3);
  });
});
