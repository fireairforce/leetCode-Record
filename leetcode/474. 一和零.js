/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // 使用 m 个 0 && n 个 1 用来拼凑出 存在Array数组中字符串的最大数量
  // dp[i][j] 用来表示
  // arr用来存每个元素需要0-1数目
  const count = (str) => {
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
  let dp = []
  for (let i = 0; i <= m; i++) {
    dp[i] = []
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0
    }
  }
  // dp[i][j] 表示 i 个 0 和 j 和 1 能存下的最多字符串的数目
  for (let item of strs) {
    let countRes = count(item)
    // console.log('countRes: ', countRes);
    for (let i = m; i >= 0; i--) {
      for (let j = n; j >= 0; j--) {
        if (i >= countRes[0] && j >= countRes[1]) {
          dp[i][j] = Math.max(
            dp[i][j],
            dp[i - countRes[0]][j - countRes[1]] + 1,
          )
        }
      }
    }
  }
  return dp[m][n]
}

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
