/**
 * @param {number[][]} grid
 * @return {boolean}
 */
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
  let visited = new Set()
  while (queue.length) {
    let [x, y] = queue.pop()
    visited.add([x, y])
    if (grid[x][y] === LEFT_OR_RIGHT) {
      if (
        !visited.has([x][y - 1]) && 0<=x&&0<=y-1 && 
        x < m &&
        y - 1 < n &&
        left.indexOf(grid[x][y - 1]) !== -1
      ) {
        queue.push([x, y - 1])
      }
      if (
        !visited.has([x][y + 1]) &&0<=x&&0<=y+1 &&
        x < m &&
        y + 1 < n &&
        left.indexOf(grid[x][y + 1]) !== -1
      ) {
        queue.push([x, y + 1])
      }
    }
    if (grid[x][y] === TOP_OR_BOTTOM) {
      if (
        !visited.has([x - 1][y]) &&0<=x-1&&0<=y &&
        x - 1 < m &&
        y < n &&
        left.indexOf(grid[x - 1][y]) !== -1
      ) {
        queue.push([x - 1, y])
      }
      if (
        !visited.has([x + 1][y]) &&0<=x+1&&0<=y &&
        x + 1 < m &&
        y < n &&
        left.indexOf(grid[x + 1][y]) !== -1
      ) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === LEFT_OR_BOTTOM) {
      if (
        !visited.has([x][y - 1]) &&0<=x&&0<=y-1 &&
        x < m &&
        y - 1 < n &&
        left.indexOf(grid[x][y - 1]) !== -1
      ) {
        queue.push([x, y - 1])
      }
      if (
        !visited.has([x + 1][y]) &&0<=x+1&&0<=y &&
        x + 1 < m &&
        y < n &&
        left.indexOf(grid[x + 1][y]) !== -1
      ) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === RIGHT_OR_BOTTOM) {
      if (
        !visited.has([x][y + 1]) &&0<=x&&0<=y+1 &&
        x < m &&
        y + 1 < n &&
        left.indexOf(grid[x][y + 1]) !== -1
      ) {
        queue.push([x, y + 1])
      }
      if (
        !visited.has([x + 1][y]) &&0<=x+1&&0<=y &&
        x + 1 < m &&
        y < n &&
        left.indexOf(grid[x + 1][y]) !== -1
      ) {
        queue.push([x + 1, y])
      }
    }
    if (grid[x][y] === LEFT_OR_TOP) {
      if (
        !visited.has([x][y - 1]) &&0<=x&&0<=y-1 &&
        x < m &&
        y - 1 < n &&
        left.indexOf(grid[x][y - 1]) !== -1
      ) {
        queue.push([x, y - 1])
      }
      if (
        !visited.has([x - 1][y]) &&0<=x-1&&0<=y &&
        x - 1 < m &&
        y < n &&
        left.indexOf(grid[x - 1][y]) !== -1
      ) {
        queue.push([x - 1, y])
      }
    }
    if (grid[x][y] === RIGHT_OR_TOP) {
      if (
        !visited.has([x][y + 1]) &&0<=x&&0<=y+1 &&
        x < m &&
        y + 1 < n &&
        left.indexOf(grid[x][y + 1]) !== -1
      ) {
        queue.push([x, y + 1])
      }
      if (
        !visited.has([x - 1][y]) &&0<=x-1&&0<=y &&
        x - 1 < m &&
        y < n &&
        left.indexOf(grid[x - 1][y]) !== -1
      ) {
        queue.push([x - 1, y])
      }
    }
  }
  console.log(visited);
  return visited.has([m-1,n-1])
}

console.log(hasValidPath([[2,4,3],[6,5,2]]));