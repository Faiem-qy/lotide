



function findKey(object, callback) {
  let result = '';
  for (let star of Object.keys(object)) {
    // console.log(object[star]);
    if (callback(object[star])) {
      // console.log(star);
      result = star;
      break;

    }
  }
  return result;
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)); // => "noma"