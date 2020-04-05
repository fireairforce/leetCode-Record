/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (a) {
  let len = a.length
  let dp = Array(len + 1).fill(0)
  for (let i = len - 1; i >= 0; i--) {
    let max = -Infinity,
      sum = 0
    for (let j = i; j < Math.min(i + 3, len); j++) {
      sum += a[j]
      let temp = sum - dp[j + 1]
      if (temp > max) {
        max = temp
      }
    }
    dp[i] = max
  }
  return dp[0] === 0 ? 'Tie' : dp[0] < 0 ? 'Bob' : 'Alice'
}
