
const eqArrays = function (arr1, arr2) {
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



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//loop through the obj.keys array->keys1 keyds2
// accesss the obect1.color and object2.color etc and check if their value is equal
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {

    return false;
  }


  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // console.log("yes, they are both an array");
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // if the keys in the object do not contain an array then ->
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false


