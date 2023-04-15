
let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};



const assertEqual = require('./0.assertEqual');



function flatten(a) {

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) === true) {
      return a.flat();
    }
  }
  return a;
}


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;