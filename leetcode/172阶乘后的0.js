/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let sum = 0;
  while (n >= 5) {
    sum += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return sum;
};

// console.log(trailingZeroes(92));
