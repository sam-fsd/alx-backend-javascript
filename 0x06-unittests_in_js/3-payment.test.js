const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  it('check that Utils.calculateNumber was called once', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(spy.calledOnce);
    spy.restore();
  });
});
