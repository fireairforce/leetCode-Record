/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
//  题目要求我们求找到楼层层数的最小次数
// 这题还不会写 太菜了
var superEggDrop = function (K, N) {
  // dp[i][j] 表示 i 个楼层 使用 j 个鸡蛋最少实验次数
  let dp = []
  // 初始化
  for (let i = 0; i <= N; i++) {
    dp[i] = []
    for (let j = 0; j <= K; j++) {
      dp[i][j] = 0
    }
  }
  for (let i = 0; i <= K; i++) {
    dp[0][i] = 0
  }
  dp[1][0] = 1
  for (let j = 1; j <= K; j++) {
    dp[0][j] = 1
  }
  for (let i = 0; i <= N; i++) {
    dp[i][0] = 1
    dp[i][1] = i
  }

  for (let i = 2; i <= N; i++) {
    for (let j = 2; j <= N; j++) {
      for (let k = 1; k <= i; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          Math.max(dp[k - 1][j - 1], dp[i - k][j]) + 1,
        )
      }
    }
  }
  return dp[N][K]
}
