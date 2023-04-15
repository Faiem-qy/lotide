const assertEqual = require('./0.assertEqual');
const eqArrays = require('./1.eqArrays');

function countLetters(str) {
  const result = {};
  const letters = str.toLowerCase().split('');
  // loop through arr of letters;
  for (const lett of letters) {
    if (lett === ' ') {
      continue;
    } else if (result[lett]) {
      result[lett] += 1;
    } else {
      result[lett] = 1;
    }
  }

  return result;
}
console.log(countLetters("This is a sentence"));

module.exports = countLetters;