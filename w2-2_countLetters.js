
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


// TEST CODE

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false




//turn input to letters
//if returns a space, skip
//if letter exists in result, add 1
//if it doesnt exist then put that letter in result and make it equal to 1

function countletters(str) {
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
console.log(countletters("This is a sentence"));
