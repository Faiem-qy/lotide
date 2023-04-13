// const assertEqual = require('../0.assertEqual');
// const tail = require('../tail');

const assert = require('chai').assert;
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#head", () => {
  it("returns result.length", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns Lighthouse", () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it("returns Labs", () => {
    assert.strictEqual(result[1], 'Labs');
  });
});

// assertEqual(result.length, 2);
// assertEqual(result[0], 'Lighthouse');
// assertEqual(result[1], 'Labs');

// module.exports = assertEqual;