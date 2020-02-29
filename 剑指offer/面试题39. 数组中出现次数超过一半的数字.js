/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0
  let card = 0
  for (item of nums) {
    if (count === 0) {
      card = item
    }
    count += card === item ? 1 : -1
  }
  return card
}
