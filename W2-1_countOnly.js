'use strict';

const assertEqual = require('./0.assertEqual');
const eqArrays = require('./1.eqArrays');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let name of allItems) {
    if (itemsToCount[name]) {
      if (result[name]) {
        result[name] += 1;
      } else {
        result[name] = 1;
      }
    }
  }
  console.log(result);
  return result;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);


//result should be a {}
//use function to call firstNames
//filter through arguments - if the name is present and is true then count the name
//else count it only once

module.exports = countOnly;