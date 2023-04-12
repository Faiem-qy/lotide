const assertEqual = require('../0.assertEqual');
const eqArrays = require('../1.eqArrays');
const assertArraysEqual = require('../2.assertArraysEqual');
const middle = require('../5.middle');



assertEqual(middle([1]).length, 0);
assertEqual(eqArrays(middle([1]), []), true);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);




module.exports = assertEqual;