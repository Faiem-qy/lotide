'use strict';
let eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};



// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   };
// };


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