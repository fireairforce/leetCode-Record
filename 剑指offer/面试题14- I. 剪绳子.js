/**
 * @param {number} n
 * @return {number}
 */

var cuttingRope = function(n) {
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  let temp = []
  for (let i = 1; i <= n; i++) {
    temp.push(i)
  }
  let dp = Array(n + 1).fill(-1)
  dp[0] = 1
  for (let i = 0; i < n; i++) {
    for (let j = temp[i]; j <= n; j++) {
      dp[j] = Math.max(dp[j], dp[j - temp[i]] * temp[i])
    }
  }
  return dp[n]
}
