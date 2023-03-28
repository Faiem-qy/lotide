
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed:${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   };
// };



function countletters(str) {
  const result = {};
  //turn input to letters
  const letters = str.toLowerCase().split('');
  // loop through arr of letters;
  for (const lett of letters) {
    //if returns a space, skip
    if (lett === ' ') {
      continue;
      //if letter exists in result, add 1
    } else if (result[lett]) {
      result[lett] += 1;
      //if it doesnt exist then put that letter in result and make it equal to 1
    } else {
      result[lett] = 1;
    }
  }

  return result;
}
console.log(countletters("This is a sentence"));