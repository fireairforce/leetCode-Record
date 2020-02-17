/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let f = Array(n + 1).fill(0)
  let mod = 1e9 + 7
  f[0] = 0
  f[1] = 1
  f[2] = 2
  for (let i = 2; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2]) % mod
  }
  return f[n]
}
