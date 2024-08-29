
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = 0;
  //no for or while loops
  if (fromN === toN) {
    return fromN;
  } else {
    result = fromN + sum(fromN + 1, toN);
  }
  return result;
};


module.exports = sum;
