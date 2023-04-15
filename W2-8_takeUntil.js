//loop through data1 
//if callback is not true continue
//when true slice from the index 


const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (!callback(array[i])) {
      result.push(array[i]);
    } else if (callback(array[i])) {
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;