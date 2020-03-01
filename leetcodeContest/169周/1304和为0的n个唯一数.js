/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let res = [];
  for (let i = -Math.floor(n / 2); i <= Math.floor(n / 2); i++) {
    if (n % 2 === 0 && i === 0) {
      continue;
    } else {
      if (i === 0) {
        res.push(Math.abs(i));
      } else {
        res.push(i);
      }
    }
  }
  return res;
};

// console.log(sumZero(5));
