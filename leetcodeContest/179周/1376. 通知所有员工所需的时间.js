/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
// 要处理一下时间的问题
var numOfMinutes = function(n, headID, manager, informTime) {
  let len = manager.length
  let tree = Array(len)
    .fill(0)
    .map((i) => [])
  for (let i = 0; i < len; i++) {
    if (manager[i] !== -1) {
      tree[manager[i]].push(i)
    }
  }
  let max = 0
  const dfs = (cur, time) => {
    let children = tree[cur]
    let len = children.length
    // 如果没有子节点，判断此时的路径是否是最大值
    if (!len) {
      max = Math.max(max, time)
    }
    // 通知到子节点用时
    time += informTime[cur]
    for (let i = 0; i < len; i++) {
      dfs(children[i], time)
    }
  }
  dfs(headID, 0)
  return max
}

// console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]))
