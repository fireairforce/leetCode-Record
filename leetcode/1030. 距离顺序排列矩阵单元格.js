/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  let visited = new Map()
  let queue = []
  let res = []
  queue.push([r0, c0])
  visited.set(JSON.stringify([r0, r0]), 1)
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  while (queue.length) {
    let sz = queue.length
    for (let k = 0; k < sz; k++) {
      let [tempX, tempY] = queue.pop()
      res.push([tempX, tempY])
      for (let i = 0; i < 4; i++) {
        let dx = tempX + dir[i][0]
        let dy = tempY + dir[i][1]
        if (
          dx < 0 ||
          dx >= R ||
          dy < 0 ||
          dy >= C ||
          visited.has(JSON.stringify([dx, dy]))
        ) {
          continue
        } else {
          visited.set(JSON.stringify(dx, dy), 1)
          queue.push([dx, dy])
        }
      }
    }
  }
  return res
}
