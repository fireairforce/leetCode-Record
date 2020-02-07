/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 和为n的k个数的组合
var combinationSum3 = function(k, n) {
  let res = []
  const dfs = (n, k, j, res, tempRes) => {
    if (n < 0) {
      return
    }
    if (k === 0) {
      if (n === 0) {
        res.push([...tempRes])
      }
      return
    }
    for (let i = j + 1; i <= 9; i++) {
      tempRes.push(i)
      dfs(n - i, k - 1, i, res, tempRes)
      tempRes.pop()
    }
    return
  }
  dfs(n, k, 0, res, [])
  return res
}
