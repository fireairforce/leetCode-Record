/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = ''
  // l统计(的数目,r统计)的数目
  const dfs = (res, str, l, r, n) => {
    // 注意这里也要边界上限定r>l
    if (l > n || r > n || r > l) {
      return
    }
    if (l === n && r === n) {
      res.push(str)
      return
    }
    dfs(res, str + '(', l + 1, r, n)
    dfs(res, str + ')', l, r + 1, n)
    return
  }
  dfs(res, '', 0, 0, n)
  return res
}
