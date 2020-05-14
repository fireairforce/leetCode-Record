/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let queue = []
  let visited = new Map()
  queue.push(n)
  visited.set(n, 1)
  let step = 0
  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let cur = queue.shift()
      // 处理一下下一轮队列的情况
      for (let j = 1; j * j <= cur; j++) {
        let now = cur - j * j
        if (now === 0) {
          step++
          return step
        }
        // 如果now这个值没有被标记，送进下一轮bfs
        if (!visited.has(now)) {
          queue.push(now)
          visited.set(now, 1)
        }
      }
    }
    step++
  }
  return 0
}

console.log(numSquares(12))
