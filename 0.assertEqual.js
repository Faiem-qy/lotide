// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  };
};
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(42, 24);
// assertEqual("word", "word");


module.exports = assertEqual;