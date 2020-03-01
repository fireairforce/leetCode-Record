/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j] && i !== j) {
        count++
      }
    }
    res.push(count)
  }
  return res
}
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))
