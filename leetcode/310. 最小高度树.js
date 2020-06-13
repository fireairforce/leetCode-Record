/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1) {
    return [0]
  }
  if (n === 2) {
    return [0, 1]
  }
  // 记录入度
  let indegree = []
  // 建图
  let graph = []
  for (let i = 0;i<n;i++) {
    indegree[i] = 0
    graph[i]= []
  }
  for (let edge of edges) {
    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
    indegree[edge[1]] ++
    indegree[edge[0]] ++
  }
  // console.log(indegree);
  // console.log(graph);
  // 初始化只放入度是1的值 
  let queue = []
  for (let i = 0;i<n;i++) {
    if (indegree[i] === 1) {
      queue.push(i)
    }
  }
  let res = []
  while(queue.length) {
    let sz = queue.length;
    res = []
    for (let i = 0;i<sz;i++) {
      let item = queue.shift()
      res.push(item)
      let negb = graph[item]
      for (let neg of negb) {
        indegree[neg] --;
        if (indegree[neg] === 1) {
          queue.push(neg)
        }
      }
    }
  }
  // 返回最后一次的就行了
  return res;
};

// console.log(findMinHeightTrees(4,[[1, 0], [1, 2], [1, 3]]));
// console.log(findMinHeightTrees(1,[]));