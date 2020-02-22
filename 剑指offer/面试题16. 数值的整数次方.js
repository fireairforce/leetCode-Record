/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let ans = 1
  let flag = 0
  if (n < 0) {
    n = -n
    flag = 1
  }
  while (n) {
    if (n % 2) {
      ans *= x
    }
    x *= x
    n = Math.floor(n / 2)
  }
  return flag ? 1 / ans : ans
}
