const letterPositions = function (sentence) {
  const results = {};
  //turn input to letters
  const letters = sentence.toLowerCase().split('');
  // loop through arr of letters
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    // if it returns a space , continue
    if (letter === ' ') {
      continue;
    }
    //if letter is in results obj -> add the index number to the arr -> push
    else if (results[letter]) {
      // push index (letter) to the array
      results[letter].push(i);
    } else {
      //if doesnt exist, give it [] and then in it as the value and in it, we put the index number
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("burpp"));


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
    } else {
      //if doesnt exist, give it [] and then in it as the value and in it, we put the index number
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("word"));*/