/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// dfs的思路就是直接搜边界上的O及其相邻的点块，然后把他们标记上。
// 没被标记的O就要变成X
var solve = function (board) {
  if (!board || board.length === 0) {
    return
  }
  let m = board.length
  let n = board[0].length
  const dfs = (board, i, j) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      board[i][j] === 'X' ||
      board[i][j] === 'M'
    ) {
      return
    }
    board[i][j] = 'M'
    dfs(board, i + 1, j)
    dfs(board, i - 1, j)
    dfs(board, i, j + 1)
    dfs(board, i, j - 1)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 从边缘的'O'开始搜索
      let isEdge = i === 0 || i === m - 1 || j === 0 || j === n - 1
      if (isEdge && board[i][j] === 'O') {
        dfs(board, i, j)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '#') {
        board[i][j] = 'O'
      }
    }
  }
}
