/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // 1 -> live, 0 -> dead
  const m = board.length,
    n = board[0].length
  const dir = [
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
  ]
  const countLive = (board, i, j) => {
    let cnt = 0
    for (let k = 0; k < 8; k++) {
      let dx = i + dir[k][0]
      let dy = j + dir[k][1]
      if (dx < 0 || dy < 0 || dx === m || dy === n) {
        continue
      } else {
        // 由于只用计算下一步的状态，因此不用考虑复活的死细胞
        if (board[dx][dy] === 1 || board[dx][dy] === 'a') {
          cnt++
        }
      }
    }
    return cnt
  }
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count = countLive(board, i, j)
      // 活细胞的存活情况
      if (board[i][j] === 1 && (count === 2 || count === 3)) {
        board[i][j] = 'a'
        // 死细胞的存活情况
      } else if (board[i][j] === 0 && count === 3) {
        board[i][j] = 'b'
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'a' || board[i][j] === 'b') {
        board[i][j] = 1
      } else {
        board[i][j] = 0
      }
    }
  }
}
