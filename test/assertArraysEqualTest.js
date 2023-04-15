// const assertEqual = require('../0.assertEqual');

// const eqArrays = require('../1.eqArrays');
// const assertArraysEqual = require('../2.assertArraysEqual');

const assert = require('chai').assert;
const assertArraysEqual = require('../2.assertArraysEqual');


describe("#assertArraysEqual", () => {
  it("returns Passed: ✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns Failed: 🛑🛑🛑 Assertion Failed: [1, 2, 3] !== [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });
  it("returns Passed: ✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("returns Passed: 🛑🛑🛑 Assertion Failed: [1, 2, 3] !== [1, 2, '3']", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
  });

});


// module.exports = assertEqual;