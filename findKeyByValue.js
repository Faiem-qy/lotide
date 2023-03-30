'use strict';



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


// use Object.keys
// use a for of to loop over keys
// look through the keys and if key === argument then return key

function findKeyByValue(obj, val) {
  let result;
  console.log(Object.keys(obj));
  for (const item of Object.keys(obj)) {
    if (obj[item] === val) {
      result = item;
      break;
    }
  }
  console.log(result);
  return result === undefined ? undefined : result;
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// console.log(bestTVShowsByGenre);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);






// function findKeyByValue(obj, val) {
//   //look at the outpu thtey want you to achieve. Create a variable
//   let answer = '';

//   //Loop the Object to access the keys. Why? -> The only way to access the value to match it to the "val they gave us it through the keys
//   // console.log(Object.keys(obj));
//   let objKeys = Object.keys(obj);
//   for (const item of objKeys) {

//     //CONSOLE>LOG EVERYTHING TO CHECK THE OUTPUT
//     // console.log(objKeys);  //['sci_fi', 'comedy', 'drama']
//     // console.log(item);  //sci_fi comedy drama
//     // console.log(obj[item]);  //The Expanse  Brooklyn Nine-Nine  The Wire

//     //if the obj[key] === val then assign the val to answer and return immediately
//     if (obj[item] === val) {
//       answer = item;
//       return answer;
//       // console.log(obj[item], val);
//     }

//   }
//   return undefined;
// }



// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// // // console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));




































