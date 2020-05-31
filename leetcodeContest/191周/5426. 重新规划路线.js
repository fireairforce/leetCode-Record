/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, arr) {
  let res = 0
  let queue = []
  const visited = new Map()
  visited.set(0, 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === 0) {
      queue.push(arr[i][0])
      visited.set(arr[i][0], 1)
      arr.splice(i, 1)
    }
    if (arr[i][0] === 0) {
      if (!visited.has(arr[i][1])) {
        queue.push(arr[i][1])
        visited.set(arr[i][1], 1)
      }
      ;[arr[i][0], arr[i][1]] = [arr[i][1], arr[i][0]]
      res++
      arr.splice(i, 1)
    }
  }
  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let temp = queue.shift()
      for (let j = 0; j < arr.length; j++) {
        if (temp === arr[j][1]) {
          if (!visited.has(arr[j][0])) {
            visited.set(arr[j][0], 1)
            queue.push(arr[j][0])
          }
        } else if (temp === arr[j][0]) {
          if (!visited.has(arr[j][1])) {
            visited.set(arr[j][1], 1)
            queue.push(arr[j][1])
            res++
          }
        }
      }
      if (visited.size === n) {
        return res;
      }
    }
  }
  return res
}

