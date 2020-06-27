/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let res = []
  for (let i = 1;i<=n;i++) {
    if (n % i === 0) {
      res.push(i)
    }
  }
  return res[k-1] ? res[k-1] : -1
};