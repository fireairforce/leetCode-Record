// 1.0版本直接tle了，2.0换个新思路来bfs
// 把公交车路线看成是图中一个点，如果他们有交点，那么他们之间就有一条边
// S,T分别是图中点，如果一个公交站中有 S 或 T，那就需要和 S 或 T 对应点连城一条边
/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */

//  从某个车站到另外一个车站最少转车次数(肯定bfs了)
//  先找到有起点站的汽车，然后第一层放起点车能去的位置。
// 队列里面每一层能去的车站
var numBusesToDestination = function (routes, S, T) {
  const judgeJiaoJi = (arr1, arr2) => {
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if(arr1[i] === arr2[j]) {
        return true
      }
      if(arr1[i] < arr2[j]) {
        i ++
      } else {
        j++
      }
    }
    return false
  }
  if (S === T) {
    return 0
  }
  let N = routes.length
  let graph = []
  for (let i = 0; i < N; i++) {
    routes[i] = routes[i].sort((a,b) => a-b)
    graph[i] = []
  }
  const visited = new Map()
  const end = new Map()
  let queue = []
  // 判断公交站是否有交集，有交集就用图存一存
  for (let i = 0; i < N; i++) {
    // console.log(i);
    for (let j = i + 1; j < N; j++) {
      if (judgeJiaoJi(routes[i],routes[j])) {
        // console.log(i, j);
        graph[i].push(j)
        graph[j].push(i)
      }
    }
  }
  for (let i = 0; i < N; i++) {
    if (routes[i].includes(S)) {
      visited.set(i, 1)
      queue.push({ item: i, depth: 1 })
    }
    if (routes[i].includes(T)) {
      end.set(i, 1)
    }
  }
  while (queue.length !== 0) {
    let { item, depth } = queue.shift()
    if (end.has(item)) {
      return depth
    }
    // 去graph里面找边
    for (let m of graph[item]) {
      if (!visited.has(m)) {
        visited.set(m, 1)
        queue.push({ item: m, depth: depth + 1 })
      }
    }
  }
  return -1
}

// console.log(
//   numBusesToDestination(
//     [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
//     15,
//     12,
//   ),
// )

// console.log(
//   numBusesToDestination(
//     [
//       [10, 13, 22, 28, 32, 35, 43],
//       [2, 11, 15, 25, 27],
//       [6, 13, 18, 25, 42],
//       [5, 6, 20, 27, 37, 47],
//       [7, 11, 19, 23, 35],
//       [7, 11, 17, 25, 31, 43, 46, 48],
//       [1, 4, 10, 16, 25, 26, 46],
//       [7, 11],
//       [3, 9, 19, 20, 21, 24, 32, 45, 46, 49],
//       [11, 41],
//     ],
//     37,
//     43,
//   ),
// )
