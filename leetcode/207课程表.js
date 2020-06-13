/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let arr = Array(numCourses).fill(0)
  let graph = []
  let queue = []
  for (let i = 0; i < numCourses; i++) {
    graph[i] = []
  }
  for (let item of prerequisites) {
    arr[item[0]]++
    graph[item[1]].push(item[0])
  }
  for (let i = 0; i < numCourses; i++) {
    // 如果这个点的入度为0就让它去队列里面
    if (arr[i] === 0) {
      queue.push(i)
    }
  }
  while (queue.length) {
    let item = queue.shift()
    numCourses--
    for (let item1 of graph[item]) {
      arr[item1]--
      if (arr[item1] === 0) {
        queue.push(item1)
      }
    }
  }
  return numCourses === 0
}

// console.log(canFinish(2, [[0, 1]]));