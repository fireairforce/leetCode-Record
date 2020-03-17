/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
  let graph = Array(n + 1)
    .fill(0)
    .map((item) => [])
  // 建树
  edges.forEach((edge) => {
    let [from, to] = edge
    graph[from].push(to)
    graph[to].push(from)
  })
  // bfs队列记录当前节点的id 和 概率
  let queue = [{ id: 1, radio: 1 }]
  let visited = new Set([1])
  let cur
  // 记录层数
  let depth = 0
  while (depth <= t && queue.length) {
    let levelLen = queue.length
    for (let i = 0; i < levelLen; i++) {
      // 从队列里面取一个节点出来，并判断是否满足结束条件
      cur = queue.shift()
      // 把当前层的 && 没访问过的节点筛选出来
      let children = graph[cur.id].filter((item) => !visited.has(item))
      if (cur.id === target) {
        if (depth === t || !children.length) {
          return cur.radio
        }
      }
      // 向队列中添加新的节点，并标记已访问
      for (let i = 0; i < children.length; i++) {
        queue.push({ id: children[i], radio: cur.radio / children.length })
        visited.add(children[i])
      }
    }
    depth++
  }
  return 0
}

// console.log(
//   frogPosition(
//     7,
//     [
//       [1, 2],
//       [1, 3],
//       [1, 7],
//       [2, 4],
//       [2, 6],
//       [3, 5],
//     ],
//     2,
//     4,
//   ),
// )
