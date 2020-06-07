/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr = arr.sort((a, b) => a - b)
  let len = arr.length
  let index = Math.floor((len - 1) / 2)
  let m = arr[index]
  let res = []
  for (let i = 0; i < len; i++) {
    res[i] = [arr[i], Math.abs(arr[i] - m)]
  }
  res = res.sort((a, b) => {
    if (a[1] === a[2]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })
  let res2 = []
  for (let i = res.length - 1; i >= 0; i--) {
    res2.push(res[i][0])
  }
  return res2.slice(0, k)
}

// console.log(getStrongest([1, 2, 3, 4, 5], 2))
// console.log(getStrongest([1, 1, 3, 5, 5], 2))
// console.log(getStrongest([6, 7, 11, 7, 6, 8], 5))
