/**
 * @param {number[][]} grid
 * @return {boolean}
 */

const judge = (x, y, m, n, visited) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= m ||
    y >= n ||
    visited.indexOf(`${x}${y}`) !== -1
  ) {
    return false
  }
  return true
}

var hasValidPath = function(grid) {
  const LEFT_OR_RIGHT = 1
  const TOP_OR_BOTTOM = 2
  const LEFT_OR_BOTTOM = 3
  const RIGHT_OR_BOTTOM = 4
  const LEFT_OR_TOP = 5
  const RIGHT_OR_TOP = 6
  const left = [1, 3, 5]
  const right = [1, 4, 6]
  const top = [2, 5, 6]
  const bottom = [2, 3, 4]
  // 右，左，下，上
  let m = grid.length,
    n = grid[0].length
  let queue = [[0, 0]]
  let visited = []
  while (queue.length) {
    let [x, y] = queue.pop()
    visited.push(`${x}${y}`)
    if (grid[x][y] === LEFT_OR_RIGHT) {
      if (judge(x, y - 1, m, n, visted) && left.indexOf(grid[x][y-1]) !== -1) {
        queue.push([x, y - 1])
      }
      if (judge(x, y + 1, m, n, visted)) {
        queue.push([x, y + 1])
      }
    }
    if (grid[x][y] === TOP_OR_BOTTOM) {
      if (judge(x - 1, y, m, n, visted)) {
        queue.push([x - 1, y])
      }
      if (judge(x + 1, y, m, n, visted)) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === LEFT_OR_BOTTOM) {
      if (judge(x, y - 1, m, n, visted)) {
        queue.push([x, y + 1])
      }
      if (judge(x + 1, y, m, n, visted)) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === RIGHT_OR_BOTTOM) {
      if (judge(x, y + 1, m, n, visted)) {
        queue.push([x, y + 1])
      }
      if (judge(x + 1, y, m, n, visted)) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === LEFT_OR_TOP) {
      if (judge(x, y - 1, m, n, visted)) {
        queue.push([x, y + 1])
      }
      if (judge(x - 1, y, m, n, visted)) {
        queue.push([x - 1, y])
      }
    }
    if (grid[x][y] === RIGHT_OR_TOP) {
      if (judge(x, y + 1, m, n, visted)) {
        queue.push([x, y + 1])
      }
      if (judge(x - 1, y, m, n, visted)) {
        queue.push([x - 1, y])
      }
    }
  }
  console.log(visted);
}

console.log(
  hasValidPath([
    [2, 4, 3],
    [6, 5, 2],
  ]),
)
