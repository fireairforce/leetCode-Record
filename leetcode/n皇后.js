/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = []
  let board = []
  for (let i = 0; i < n; i++) {
    board[i] = []
    for (let j = 0; j < n; j++) {
      board[i][j] = '.'
    }
  }
  //  用来验证当前对棋盘是否合理
  const isvalid = (board, row, col) => {
    // 验证当前列是否有皇后
    let n = board.length
    for (let i = 0; i < n; i++) {
      if (board[i][col] === 'Q') {
        return false
      }
    }
    // 只用验证左上和右上因为之后的都还没放呢
    // 验证右上方是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    // 验证左上是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    return true
  }
  //  需要对每一行进行一个回溯
  const dfs = (board, row) => {
    // 递归对终止条件
    if (row === board.length) {
      res.push(board.map((item) => item.join('')))
      return
    }
    let len = board[row].length
    for (let col = 0; col < len; col++) {
      // 不符合对选择直接pass
      if (!isvalid(board, row, col)) {
        continue
      }
      // 做出选择
      board[row][col] = 'Q'
      // 做出选择之后去回溯
      dfs(board, row + 1)
      // 回溯完成之后撤销选择
      board[row][col] = '.'
    }
  }
  dfs(board, 0)
  return res.length
}

// console.log(solveNQueens(4))
