/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let len = days[days.length - 1]
  let dp = Array(len + 1).fill(0)
  for (let i = 0; i < days.length; i++) {
    dp[days[i]] = -1
  }
  for (let i = 1; i <= len; i++) {
    if (dp[i] === 0) {
      dp[i] = dp[i - 1]
    } else {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2],
      )
    }
  }
  return dp[len]
}
