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
  visited.set(JSON.stringify([r0, c0]), 1)
  queue.push([r0, c0])
  let dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ]
  while (queue.length) {
    let sz = queue.length
    for (let k = 0; k < sz; k++) {
      let [tempX, tempY] = queue.shift()
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
        } else if(!visited.has(JSON.stringify([dx, dy]))){
          queue.push([dx, dy])
          visited.set(JSON.stringify([dx, dy]), 1)
        }
      }
    }
  }
  return res;
}

// console.log(allCellsDistOrder(2, 2, 0, 1))
