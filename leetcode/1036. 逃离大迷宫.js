/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
// 从起点和终点同时开始广搜
var isEscapePossible = function (blocked, source, target) {
  if(blocked.length === 0) {
    return true;
  }
  let startQueue = []
  let endQueue = []
  let visitedStart = new Map()
  let visitedEnd = new Map()
  startQueue.push(source)
  endQueue.push(target)
  visitedStart.set(JSON.stringify(source), 1)
  visitedEnd.set(JSON.stringify(target), 1)
  let blockedMap = new Map()
  for (let i = 0; i < blocked.length; i++) {
    blockedMap.set(JSON.stringify(blocked[i]), 1)
  }
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  while (startQueue.length && endQueue.length) {
    let sz1 = startQueue.length
    let sz2 = endQueue.length
    for (let i = 0; i < sz1; i++) {
      let item1 = startQueue.shift()
      if (visitedEnd.has(JSON.stringify(item1))) {
        console.log(`hh`);
        return true
      }
      for (let k = 0; k < 4; k++) {
        // 处理越界的情况
        if (
          item1[0] + dir[k][0] < 0 ||
          item1[0] + dir[k][0] >= 1e6 ||
          item1[1] + dir[k][1] < 0 ||
          item1[1] + dir[k][1] >= 1e6 ||
          blockedMap.has(
            JSON.stringify([item1[0] + dir[k][0], item1[1] + dir[k][1]]),
          )
        ) {
          continue
        } else {
          if (
            !visitedStart.has(
              JSON.stringify([item1[0] + dir[k][0], item1[1] + dir[k][1]]),
            )
          ) {
            startQueue.push([item1[0] + dir[k][0], item1[1] + dir[k][1]])
            visitedStart.set(
              JSON.stringify([item1[0] + dir[k][0], item1[1] + dir[k][1]]),
            )
          }
        }
      }
    }
    for (let i = 0; i < sz2; i++) {
      let item2 = endQueue.shift()
      if (visitedStart.has(JSON.stringify(item2))) {
        console.log(`hhh`);
        return true
      }
      for (let k = 0; k < 4; k++) {
        // 处理越界的情况
        if (
          item2[0] + dir[k][0] < 0 ||
          item2[0] + dir[k][0] >= 1e6 ||
          item2[1] + dir[k][1] < 0 ||
          item2[1] + dir[k][1] >= 1e6 ||
          blockedMap.has(
            JSON.stringify([item2[0] + dir[k][0], item2[1] + dir[k][1]]),
          )
        ) {
          continue
        } else {
          if (
            !visitedEnd.has(
              JSON.stringify([item2[0] + dir[k][0], item2[1] + dir[k][1]]),
            )
          ) {
            endQueue.push([item2[0] + dir[k][0], item2[1] + dir[k][1]])
            visitedEnd.set(
              JSON.stringify([item2[0] + dir[k][0], item2[1] + dir[k][1]]),
            )
          }
        }
      }
      // 这里利用了block的最大值只有200卡过去的
      if(startQueue.length >= 200 && endQueue.length >= 200) {
        return true
      }
    }
  }
  return false
}

// console.log(
//   isEscapePossible(
//     [
//       [0, 1],
//       [1, 0],
//     ],
//     [0, 0],
//     [0, 2],
//   ),
// )
// console.log(isEscapePossible([], [0, 0], [999999, 999999]))
console.log(isEscapePossible([[691938,300406],[710196,624190],[858790,609485],[268029,225806],[200010,188664],[132599,612099],[329444,633495],[196657,757958],[628509,883388]],
  [655988,180910],
  [267728,840949]));
