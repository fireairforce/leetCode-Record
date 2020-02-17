/**
 * @param {number[]} numbers
 * @return {number}
 */
// 二分法
var minArray = function(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  let l = 0
  let r = numbers.length - 1
  while (l < r) {
    if (numbers[l] <= numbers[r]) {
      r--
    } else {
      l++
    }
  }
  return numbers[l]
}
