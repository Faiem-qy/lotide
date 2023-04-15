'use strict';
const assertEqual = require('./0.assertEqual');
const eqArrays = require('./1.eqArrays');




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


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);




module.exports = findKeyByValue;



































