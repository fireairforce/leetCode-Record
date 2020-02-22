/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  let mod = 1e9 + 7
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  if (n === 4) {
    return 4
  }
  let sum = 1
  while (n > 4) {
    sum = (sum * 3) % mod
    n -= 3
  }
  return (sum * n) % mod
}
