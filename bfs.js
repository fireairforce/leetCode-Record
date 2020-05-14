const bfs = (start, target) => {
  let queue = []
  let visited = new Map()
  let step = 0
  queue.push(start)
  visited.set(visited, 1)
  while (queue.length !== 0) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      // 处理一下当前点周围点的情况
      // 如果有下一轮的点且没被走过，直接放进队列去进行下一轮的遍历即可
      if (!visited(xxx)) {
        visited.set(xxx, 1)
        queue.push(xxx)
      }
    }
    step ++
  }
}
