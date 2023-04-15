'use strict';

const eqArrays = require('./1.eqArrays');
const assertEqual = require('./0.assertEqual');


function letterPositions(words) {
  const result = {};
  const letters = words.toLowerCase().split('');

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter[i] === ' ') {
      continue;
    } else if (result[letter[i]]) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }
  }
  console.log(result);
  return result;
}



letterPositions("Lots of letters in this sentence");


module.exports = letterPositions;