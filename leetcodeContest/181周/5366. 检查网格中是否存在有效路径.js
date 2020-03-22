/**
 * @param {number[][]} grid
 * @return {boolean}
 */

const judge = (x, y, m, n, visited) => {
  if (
    x < 0 ||
    y < 0 ||
    x > m - 1 ||
    y > n - 1 ||
    visited.has(`${x}-${y}`)
  ) {
    return false
  } else {
    return true
  }
}

var hasValidPath = function(grid) {
  const LEFT_OR_RIGHT = 1
  const TOP_OR_BOTTOM = 2
  const LEFT_OR_BOTTOM = 3
  const RIGHT_OR_BOTTOM = 4
  const LEFT_OR_TOP = 5
  const RIGHT_OR_TOP = 6
  const left = new Set()
  left.add(1)
  left.add(3)
  left.add(5)
  const right = new Set()
  right.add(1)
  right.add(4)
  right.add(6)
  const top = new Set()
  top.add(2)
  top.add(5)
  top.add(6)
  const bottom = new Set()
  bottom.add(2)
  bottom.add(3)
  bottom.add(4)
  let m = grid.length,
    n = grid[0].length
  let queue = [[0, 0]]
  let visited = new Set()
  while (queue.length) {
    let [x, y] = queue.pop()
    visited.add(`${x}-${y}`)
    if (grid[x][y] === LEFT_OR_RIGHT) {
      if (
        judge(x, y - 1, m, n, visited) &&
        right.has(grid[x][y - 1])
      ) {
        queue.push([x, y - 1])
      }
      if (
        judge(x, y + 1, m, n, visited) &&
        left.has(grid[x][y + 1])
      ) {
        queue.push([x, y + 1])
      }
    }
    if (grid[x][y] === TOP_OR_BOTTOM) {
      if (
        judge(x - 1, y, m, n, visited) &&
        bottom.has(grid[x - 1][y])
      ) {
        queue.push([x - 1, y])
      }
      if (
        judge(x + 1, y, m, n, visited) &&
        top.has(grid[x + 1][y])
      ) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === LEFT_OR_BOTTOM) {
      if (
        judge(x, y - 1, m, n, visited) &&
        right.has(grid[x][y - 1])
      ) {
        queue.push([x, y - 1])
      }
      if (
        judge(x + 1, y, m, n, visited) &&
        top.has(grid[x + 1][y])
      ) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === RIGHT_OR_BOTTOM) {
      if (
        judge(x, y + 1, m, n, visited) &&
        left.has(grid[x][y + 1])
      ) {
        queue.push([x, y + 1])
      }
      if (
        judge(x + 1, y, m, n, visited) &&
        top.has(grid[x + 1][y])
      ) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === LEFT_OR_TOP) {
      if (
        judge(x, y - 1, m, n, visited) &&
        right.has(grid[x][y - 1])
      ) {
        queue.push([x, y - 1])
      }
      if (
        judge(x - 1, y, m, n, visited) &&
        bottom.has(grid[x - 1][y])
      ) {
        queue.push([x - 1, y])
      }
    }
    if (grid[x][y] === RIGHT_OR_TOP) {
      if (
        judge(x, y + 1, m, n, visited) &&
        left.has(grid[x][y + 1])
      ) {
        queue.push([x, y + 1])
      }
      if (
        judge(x - 1, y, m, n, visited) &&
        bottom.has(grid[x - 1][y])
      ) {
        queue.push([x - 1, y])
      }
    }
  }
  return visited.has(`${m-1}-${n-1}`)
}
