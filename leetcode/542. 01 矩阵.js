/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  const queue = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j])
      } else {
        matrix[i][j] = -1
      }
    }
  }
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  while (queue.length !== 0) {
    const point = queue.shift()
    let x = point[0],
      y = point[1]
    for (let i = 0; i < 4; i++) {
      let dx = x + dir[i][0]
      let dy = y + dir[i][1]
      // 到达的当前这个点是没有被走过的 
      if (dx >= 0 && dx < m && dy >= 0 && dy < n && matrix[dx][dy] === -1) {
        matrix[dx][dy] = matrix[x][y] + 1
        queue.push([dx, dy])
      }
    }
  }
  return matrix;
}

// console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]));