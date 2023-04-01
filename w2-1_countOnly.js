'use strict';


// let eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i])
//       return false;
//   }
//   return true;
// };



// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   };
// };


// TEST CODE

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const result = {};
  for (let name of allItems) {
    if (itemsToCount[name]) {
      if (result[name]) {
        result[name] += 1;
      } else {
        result[name] = 1;
      }
    }
  }
  console.log(result);
  return result;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);


//result should be a {}
//use function to call firstNames
//filter through arguments - if the name is present and is true then count the name
//else count it only once

