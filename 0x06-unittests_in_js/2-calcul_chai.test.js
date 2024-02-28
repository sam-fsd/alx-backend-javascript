const assert = require('assert');
const { it, describe } = require('mocha');
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculteNumbers where type = SUM', function () {
  it('should return the sum of two numbers', function () {
    expect(calculateNumber('SUM', 5, 5)).to.equal(10);
  });
  it('should return rounded up number', function () {
    expect(calculateNumber('SUM', 5.5, 5.5)).to.equal(12);
  });
  it('for negative number the floating point should be > 5 to be rounded to nearest whole number', function () {
    expect(calculateNumber('SUM', -5.5, -5.5)).to.equal(-10);
  });
  it('for negative number the floating point should be > 5 to be rounded to nearest whole number', function () {
    expect(calculateNumber('SUM', -5.6, -5.6)).to.equal(-12);
  });
});

describe('calculteNumbers where type = SUBTRACT', function () {
  it('should return the difference of two numbers', function () {
    expect(calculateNumber('SUBTRACT', 5, 5)).to.equal(0);
  });
  it('should return rounded up number', function () {
    expect(calculateNumber('SUBTRACT', 5.5, 7.5)).to.equal(-2);
  });
  it('should not round of if floating point of a negative number is < 5', function () {
    expect(calculateNumber('SUBTRACT', -8.5, 2.8)).to.equal(-11);
  });
  it('should round of if floating point of a negative number is > 5', function () {
    expect(calculateNumber('SUBTRACT', -8.6, 2.8)).to.equal(-12);
  });
});

describe('calculateNumbers where type = DIVIDE', function () {
  it('should return the divsion of rounded up numbers', function () {
    expect(calculateNumber('DIVIDE', 9.5, 5.3)).to.equal(2);
  });
  it('should return error if b is 0', function () {
    expect(calculateNumber('DIVIDE', 5, 0.4)).to.equal('Error');
  });
  it("should return string('error') if b is 0", function () {
    expect(calculateNumber('DIVIDE', 5, 0.4)).to.a('string');
  });
  it('should return positive value for two negative inputs', function () {
    expect(calculateNumber('DIVIDE', -9.6, -5.3), 2);
  });
  it('should not round of if floating point of a negative number is < 5', function () {
    expect(calculateNumber('DIVIDE', -8.5, 2.8)).to.equal(-2.6666666666666665);
  });
  it('should round of if floating point of a negative number is > 5', function () {
    expect(calculateNumber('DIVIDE', -8.6, 2.8)).to.equal(-3);
  });
  it('should return negative number for one negative input', function () {
    expect(calculateNumber('DIVIDE', -8.6, 2.8)).to.equal(-3);
  });
});
