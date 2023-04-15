'use strict';

const assertEqual = require('./0.assertEqual');
const eqArrays = require('./1.eqArrays');

function without(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
        break;
      }
    } if (remove !== true) {
      newArray.push(source[i]);
    }
  }
  // console.log(newArray);
  return newArray;
};
// assertEqual(without([1, 2, 3], [1])); // this should be the new array [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

module.exports = without;