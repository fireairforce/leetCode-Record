/**
 * @param {string} s
 * @return {number}
 */
// 状态转移方程式为dp[n] = dn[n-1] + dp[n-2]
var numDecodings = function(s) {
  let dp = Array(s.length + 1).fill(0)
  if (s.length === 0 || (s.length === 1 && s[0] === '0')) {
    return 0
  }
  if (s.length === 1) {
    return 1
  }
  dp[0] = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      dp[i + 1] = 0
    } else {
      dp[i + 1] = dp[i]
    }
    if (i > 0 && (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6'))) {
      dp[i + 1] += dp[i - 1]
    }
  }
  return dp[dp.length - 1]
}
