/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return quickSort(nums)
}

const quickSort = (arr) => {
  if (arr.length <= 0) {
    return arr
  }
  let left = []
  let right = []
  let privotIndex = Math.floor(arr.length >> 1)
  let privot = arr.splice(privotIndex, 1)[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([privot], quickSort(right))
}
