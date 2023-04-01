
const eqArrays = function (arr1, arr2) {
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



const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
};


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 1, b: 3 };

assertObjectsEqual(obj1, obj2);
// Output: "✅✅✅ Assertion passed: { a: 1, b: 2 } === { b: 2, a: 1 }"
assertObjectsEqual(obj1, obj3);
// Output: "🛑🛑🛑 Assertion failed: { a: 1, b: 2 } !== { a: 1, b: 3 }"






// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false


// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
