/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length
  let n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  function dfs(i, j, k) {
    if (i < 0 || i >= m || j < 0 || j >= n || word[k] !== board[i][j]) {
      return false
    }
    if (k === word.length - 1) {
      return true
    }
    let temp = board[i][j]
    // 这里做个标记
    board[i][j] = 'x'
    const res =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1)
    board[i][j] = temp
    return res
  }
  return false
}
