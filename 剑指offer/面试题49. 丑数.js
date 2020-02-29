/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let dp = Array(n + 1).fill(0)
  dp[0] = 1
  let l2 = 0
  let l3 = 0
  let l5 = 0
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(2 * dp[l2], 3 * dp[l3], 5 * dp[l5])
    if (dp[i] >= 2 * dp[l2]) {
      l2++
    }
    if (dp[i] >= 3 * dp[l3]) {
      l3++
    }
    if (dp[i] >= 5 * dp[l5]) {
      l5++
    }
  }
  return dp[n - 1]
}
