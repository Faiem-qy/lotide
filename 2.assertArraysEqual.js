const assertEqual = require('./0.assertEqual');
const eqArrays = require('./1.eqArrays');

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



const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};



// TEST CODE

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // should output "✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]"
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // should output "🛑🛑🛑 Assertion Failed: [1, 2, 3] !== [3, 2, 1]"
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should output "✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]"
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // should output "🛑🛑🛑 Assertion Failed: [1, 2, 3] !== [1, 2, '3']"


module.exports = assertArraysEqual;
