/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
  let len = slices.length
  let dp = Array(len)
    .fill(0)
    .map((item) => Array(Math.floor(len / 3) + 1).fill(0))
  let res = 0
  // 求不相邻序列的最大值
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < Math.floor(len / 3); j++) {
      dp[i][j + 1] = Math.max(
        i > 0 ? dp[i - 1][j + 1] : 0,
        i - 2 >= 0 ? dp[i - 2][j] + slices[i] : slices[i],
      )
    }
    res = Math.max(res, dp[i][Math.floor(len / 3)])
  }
  dp = Array(len)
    .fill(0)
    .map((item) => Array(Math.floor(len / 3) + 1).fill(0))
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < Math.floor(len / 3); j++) {
      dp[i][j + 1] = Math.max(
        dp[i - 1][j + 1],
        i - 2 >= 0 ? dp[i - 2][j] + slices[i] : slices[i],
      )
    }
    res = Math.max(res, dp[i][Math.floor(len / 3)])
  }
  return res
}

// console.log(maxSizeSlices([1, 2, 3, 4, 5, 6]))
