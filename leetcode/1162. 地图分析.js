/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let queue = []
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        queue.push(`${i}-${j}`)
      }
    }
  }
  // 全是陆地或者海洋
  if (queue.length === 0 || queue.length === grid.length * grid[0].length) {
    return -1
  }
  let res = 0
  while (queue.length !== 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let pop = queue
        .shift()
        .split('-')
        .map((i) => parseInt(i))
      for (let j = 0; j < 4; j++) {
        let dx = pop[0] + dir[j][0]
        let dy = pop[1] + dir[j][1]
        if (
          dx >= 0 &&
          dx < grid.length &&
          dy >= 0 &&
          dy < grid[0].length &&
          grid[dx][dy] === 0
        ) {
          grid[dx][dy] = 1
          queue.push(`${dx}-${dy}`)
        }
      }
    }
    res++
  }
  return res - 1
}
