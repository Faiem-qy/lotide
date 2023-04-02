
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



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  };
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};