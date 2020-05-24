/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
// 只有挖到周围没有地雷的空方块'B'才去bfs它周围的点，其他情况不用bfs
var updateBoard = function (board, click) {
  let m = board.length
  let n = board[0].length
  // 一开始就点到地雷就game over
  if (board[click[0]][click[1]] === 'M') {
    board[click[0]][click[1]] = 'X'
    return board
  } else if(board[click[0]][click[1]] !== 'E') {
    return board
  }
  let queue = []
  let visited = new Map()
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
  ]
  queue.push(click)
  visited.set(JSON.stringify(click), 1)
  const changeArr = (i, j) => {
    let count = 0
    for (let k = 0; k < 8; k++) {
      let dx = i + dir[k][0]
      let dy = j + dir[k][1]
      if (dx < 0 || dx >= m || dy < 0 || dy >= n) {
        continue
      } else {
        if (board[dx][dy] === 'M') {
          count++
        }
      }
    }
    if (count === 0) {
      board[i][j] = 'B'
    } else {
      board[i][j] = String(count)
    }
  }

  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let [tempX, tempY] = queue.shift()
      changeArr(tempX, tempY)
      // 如果这个点被点击之后是B，就可以对它拓展了
      if (board[tempX][tempY] === 'B') {
        for (let k = 0; k < 8; k++) {
          let dx = tempX + dir[k][0]
          let dy = tempY + dir[k][1]
          if (dx < 0 || dx >= m || dy < 0 || dy >= n) {
            continue
          } else {
            if (!visited.has(JSON.stringify([dx, dy]))) {
              visited.set(JSON.stringify([dx, dy]), 1)
              queue.push([dx, dy])
            }
          }
        }
      }
    }
  }
  return board
}
// E是没有被点击的空方块
console.log(
  updateBoard(
    [["E","E","E","E","E","E","E","E"],
    ["E","E","E","E","E","E","E","M"],
    ["E","E","M","E","E","E","E","E"],
    ["M","E","E","E","E","E","E","E"],
    ["E","E","E","E","E","E","E","E"],
    ["E","E","E","E","E","E","E","E"],
    ["E","E","E","E","E","E","E","E"],
    ["E","E","M","M","E","E","E","E"]]
    ,[0,0]
  ),
)
