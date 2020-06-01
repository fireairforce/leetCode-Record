const solve = (strs, m, n) => {
  // 用 0 -1 背包定义状态，因为有两个容量，因此开一个三维的数组
  // dp[k][i][j] 表示在子区间 0 ~ k 使用 i 个 0 和 j 个 1 能得到的最多字符串的数目
  // 状态转移方程式就可以这样推:
  // dp[k][i][j] = Math.max(dp[k - 1][i][j], 1 + dp[k-1][i-当前字符串0个数][j-当前字符串1个数])
  const countNum = (str) => {
    str = str.split('')
    let countZero = 0
    let countOne = 0
    for (let item of str) {
      if (item === '0') {
        countZero++
      } else {
        countOne++
      }
    }
    return [countZero, countOne]
  }
  let len = strs.length
  let dp = []
  for (let k = 0; k <= len; k++) {
    dp[k] = []
    for (let i = 0; i <= m; i++) {
      dp[k][i] = []
      for (let j = 0; j <= n; j++) {
        dp[k][i][j] = 0
      }
    }
  }
  for (let k = 1; k <= len; k++) {
    // 偏移一个数值位
    let countRes = countNum(strs[k - 1])
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        dp[k][i][j] = dp[k - 1][i][j]
        if (i >= countRes[0] && j >= countRes[1]) {
          dp[k][i][j] = Math.max(
            dp[k - 1][i][j],
            dp[k - 1][i - countRes[0]][j - countRes[1]] + 1,
          )
        }
      }
    }
  }
  console.log(dp);
  return dp[len][m][n];
}

// console.log(solve(['10', '0001', '111001', '1', '0'], 5, 3))
