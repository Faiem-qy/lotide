
const assertEqual = require('./0.assertEqual');


const tail = function(arr) {
  return arr.slice(1);
};






// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], 'Lighthouse');
// assertEqual(result[1], 'Labs');


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
//     return true;
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//     return false;
//   };
// };


module.exports = tail;