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



//turn input to letters
// loop through arr of letters
// if it returns a space , continue
//if letter is in results obj -> add the index number to the arr -> push
// push index (letter) to the array
//if doesnt exist, give it [] and then in it as the value and in it, we put the index number
/*
const letterPositions = function (sentence) {
  const results = {};
  const letters = sentence.toLowerCase().split('');
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter === ' ') {
      continue;
    }
    else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("burpp"));
*/

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

/*
variant

const letterPositions = function (sentence) {
  const results = {};
  //turn input to letters
  const letters = sentence.toLowerCase().split('');
  // loop through arr of letters
  for (const [i, letter] of letters.entries()) {
    // if it returns a space , continue
    if (letter === ' ') {
      continue;
    }
    //if letter is in results obj -> add the index number to the arr -> push
    else if (results[letter]) {
      // push index (letter) to the array
      results[letter].push(i);
      //if doesnt exist, give it [] and then in it as the value and in it, we put the index number
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("word"));*/

//turn input to letters
// loop through arr of letters
// if it returns a space , continue
//if letter is in results obj -> add the index number to the arr -> push
// push index (letter) to the array
//if doesnt exist, give it [] and then in it as the value and in it, we put the index number

