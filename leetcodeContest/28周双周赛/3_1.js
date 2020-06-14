/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  let res = []
  let left = 0,
    right = 1
  while (left <= right) {
    let cur = 0
    for (let i = left; i < right; i++) {
      cur += arr[i]
    }
    if (cur === target) {
      let list = []
      for (let i = left; i < right; i++) {
        list.push(arr[i])
      }
      res.push([...list])
      left ++
    } else if (cur < target) {
      right++
    } else if (cur > target){
      left++
    }
    if (right === arr.length || left === arr.length) {
      break;
    }
  }
  return res
}

console.log(minSumOfLengths([3, 2, 2, 4, 3], 3))
console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6))
