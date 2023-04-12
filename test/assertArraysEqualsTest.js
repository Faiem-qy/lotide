const assertEqual = require('../0.assertEqual');
const eqArrays = require('../1.eqArrays');
const assertArraysEqual = require('../2.assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should output "✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]"
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should output "🛑🛑🛑 Assertion Failed: [1, 2, 3] !== [3, 2, 1]"
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should output "✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]"
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // should output "🛑🛑🛑 Assertion Failed: [1, 2, 3] !== [1, 2, '3']"



module.exports = assertEqual;