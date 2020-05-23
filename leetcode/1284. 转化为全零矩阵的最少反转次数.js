/**
 * @param {number[][]} mat
 * @return {number}
 */
// 反转指的是能够将 0-> 1 1-> 0 每次反转相邻边上的单元格也被翻转
// 求最小反转次数
/**
 * 1,1,1
 * 1,0,1 ->
 * 0 0 0
 */
// 直接使用js的map来对每一次对状态进行一个存储

var minFlips = function (mat) {
  let m = mat.length,
    n = mat[0].length
  let queue = []
  let visited = new Map()
  let first = JSON.stringify(mat)
  let step = 0
  queue.push(first)
  visited.set(first, 1)
  const judge = (arr) => {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] !== 0) {
          return false
        }
      }
    }
    return true
  }
  const changeArr = (arr, i, j) => {
    if (arr[i][j] === 0) {
      arr[i][j] = 1
    } else {
      arr[i][j] = 0
    }
    return arr
  }
  const change = (arr, i, j) => {
    arr = changeArr(arr, i, j)
    let dir = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ]
    for (let k = 0; k < 4; k++) {
      if (
        i + dir[k][0] < 0 ||
        i + dir[k][0] >= m ||
        j + dir[k][1] < 0 ||
        j + dir[k][1] >= n
      ) {
        continue
      } else {
        arr = changeArr(arr, i + dir[k][0], j + dir[k][1])
      }
    }
    return arr
  }
  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let item = queue.shift()
      let item2 = JSON.parse(item)
      if (judge(item2)) {
        return step
      }
      for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
          item3 = JSON.parse(JSON.stringify(item2))
          let changeArr = JSON.stringify(change(item3, x, y))
          if (visited.has(changeArr)) {
            continue
          } else {
            queue.push(changeArr)
            visited.set(changeArr, 1)
          }
        }
      }
    }
    step++
  }
  return -1
}

// console.log(
//   minFlips([
//     [0, 0],
//     [0, 1],
//   ]),
// )
