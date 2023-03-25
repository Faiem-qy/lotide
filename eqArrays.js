// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(42, 24);
assertEqual("word", "word");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false