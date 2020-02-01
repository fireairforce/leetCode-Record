/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 4) {
    return false;
  }
  let res = 0;
  while (n > 0) {
    res += Math.pow(n % 10, 2);
    n = parseInt(n / 10);
  }
  return res === 1 ? true : isHappy(res);
};
