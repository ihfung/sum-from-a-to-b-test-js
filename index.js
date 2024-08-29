
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = 0;
  //no for or while loops
  if (fromN === toN) { //if the first number is the same as the second number then return the first number
    return fromN;
  } else {
    result = fromN + sum(fromN + 1, toN); //else it would add the first number to the sum of the next number
  }
  return result;
};


module.exports = sum;
