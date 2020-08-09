/**
 * 
 * @param {Array} arr 
 */
// 正常买卖股票问题
const solve = (arr) => {
  let len = arr.length;
  if (len === 0) {
    return 0;
  }
  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = Array(2).fill(0)
  }
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -arr[i]
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i])
    // 注意这次股票只能买卖一次，因此这里要注意
    dp[i][1] = Math.max(dp[i - 1][1], -arr[i])
  }
  return dp[len - 1][0]
}