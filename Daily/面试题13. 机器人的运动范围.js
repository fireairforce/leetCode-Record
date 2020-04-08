/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  let arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = new Array()
    let x = (i + '').split('')
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0
      let y = (j + '').split('')
      for (let k = 0; k < x.length; k++) {
        arr[i][j] += parseInt(x[k])
      }
      for (let k = 0; k < y.length; k++) {
        arr[i][j] += parseInt(y[k])
      }
    }
  }
  let res = [];
  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return
    }
    if (arr[i][j] > k || res.indexOf(`${i}-${j}`) !== -1) {
      return
    }
    if (arr[i][j] <= k && res.indexOf(`${i}-${j}`) === -1) {
      res.push(`${i}-${j}`);
    }
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  dfs(0, 0, res)
  return res.length;
};