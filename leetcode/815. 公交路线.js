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
  if (S === T) {
    return 0;
  }
  let queue = []
  let visited = new Map()
  let visited2 = new Map()
  let step = 1
  for (let route of routes) {
    if (route.includes(S)) {
      if (route.includes(T)) {
        return step
      } else {
        visited2.set(JSON.stringify(route), 1)
        for (let item of route) {
          if (item !== S) {
            queue.push(item)
            visited.set(item, 1)
          }
        }
      }
    }
  }
  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let item = queue.shift()
      if (item === T) {
        return step
      }
      for (let route of routes) {
        if (!visited2.has(JSON.stringify(route)) && route.includes(item)) {
          visited.set(JSON.stringify(route), 1)
          for (let j = 0; j < route.length; j++) {
            if (!visited.has(route[j])) {
              visited.set(route[j], 1)
              queue.push(route[j])
            } else {
              continue;
            }
          }
        } else {
          continue
        }
      }
    }
    step++
  }
  return -1
}

// console.log(
//   numBusesToDestination(
//     [
//       [1, 2, 7],
//       [3, 6, 7],
//     ],
//     1,
//     6,
//   ),
// )

// console.log(
//   numBusesToDestination(
//     [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
//     15,
//     12,
//   ),
// )
