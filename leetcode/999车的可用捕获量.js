/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        let res = 0
        for (let k = 0; k < 4; k++) {
          let x = i,
            y = j
          while (1) {
            x += dir[k][0]
            y += dir[k][1]
            if (x < 0 || x >= 8 || y < 0 || y >= 8 || board[x][y] === 'B') {
              break
            }
            if (board[x][y] === 'p') {
              res++
              break
            }
          }
        }
        return res
      }
    }
  }
  return 0
}
