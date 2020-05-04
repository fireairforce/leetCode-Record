/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
// 每取一轮的时候，都取这轮的前k个值，然后再和下一行的n个值相加，求出结果的前k个值往下面加下去
var kthSmallest = function (mat, k) {
  let m = mat.length
  let n = mat[0].length
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = mat[0][i]
  }
  arr = arr.sort((a, b) => a - b).slice(0, k)
  for (let i = 1; i < m; i++) {
    // temp用来存每一行与上一行堆出来的结果 k * n个结果
    let temp = []
    let index = 0
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < n; k++) {
        temp[index] = arr[j] + mat[i][k]
        index++
      }
    }
    // 筛出k个值
    arr = temp.sort((a, b) => a - b).slice(0, k)
  }
  return arr[k - 1]
}
// console.log(kthSmallest([[1,3,11],[2,4,6]], 5));
// console.log(kthSmallest([[1,3,11],[2,4,6]], 9));
// console.log(kthSmallest([[1,10,10],[1,4,5],[2,3,6]], 7));
