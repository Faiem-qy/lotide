// const assertEqual = require('../0.assertEqual');
// const middle = require('../5.middle');
const eqArrays = require('../1.eqArrays');
const assertArraysEqual = require('../2.assertArraysEqual');

const assert = require('chai').assert;
const middle = require('../5.middle');



describe("#head", () => {
  it("returns []", () => {
    assert.strictEqual(middle([1]).length, 0);
  });
  it("returns []", () => {
    assert.strictEqual(eqArrays(middle([1]), []), true);
  });
  it("returns []", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []));
  });
  it("returns [2]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });
  it("returns [3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  });
  it("returns [2,3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  });
  it("returns [3,4]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });

});


// module.exports = assertEqual;