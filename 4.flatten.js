
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

// assertEqual([1, 2, 3], [4, 5, 6]);
// assertEqual([1, 2, 3], [1, 2, 3]);
// ________________________Is the above needed

function flatten(a) {

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) === true) {
      return a.flat();
    }
  }
  // return a;
}
// _________________is the loop needed, is Array.is array needed;

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

