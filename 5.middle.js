const assertEqual = require('./0.assertEqual');
const eqArrays = require('./1.eqArrays');
const assertArraysEqual = require('./2.assertArraysEqual');

// let eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i])
//       return false;
//   }
//   return true;
// };



// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   };
// };


// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
//   }
// };

const middle = function(array) {
  // if the array has one or two elements then return an empty array
  if (array.length <= 2) {
    return [];
    //if the length of the array is an odd number then do something
  } else if (array.length % 2 === 1) {//odd
    return [array[Math.floor(array.length / 2)]];
    //return the one single middle element
    ;
  } else if (array.length % 2 == 0) {//even
    // if the length of the array is even then do an action
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
    //return the two middle elements
  }
  // return the middle of an array
  // console.log(result);
};


// assertEqual(middle([1]).length, 0);
// assertEqual(eqArrays(middle([1]), []), true);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


module.exports = middle;


