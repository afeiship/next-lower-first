var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-lower-first');

describe('next/lowerFirst', function () {

  it("nx.lowerFirst('Fred'); => fred", function () {
    var res = nx.lowerFirst('Fred');
    assert.equal(res, 'fred');
  });

  it("nx.lowerFirst('FRED'); => fRED", function () {
    var res = nx.lowerFirst('FRED');
    assert.equal(res, 'fRED');
  });

});
