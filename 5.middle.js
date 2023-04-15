const assertEqual = require('./0.assertEqual');
const eqArrays = require('./1.eqArrays');
const assertArraysEqual = require('./2.assertArraysEqual');


const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {//odd
    return [array[Math.floor(array.length / 2)]];
  } else if (array.length % 2 == 0) {//even
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
  }
  return [];
};

module.exports = middle;


