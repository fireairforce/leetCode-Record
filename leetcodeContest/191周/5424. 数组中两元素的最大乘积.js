/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let len = nums.length
  let max = -1
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      max = Math.max(max, (arr[i] - 1) * (arr[j] - 1))
    }
  }
  return max
}
