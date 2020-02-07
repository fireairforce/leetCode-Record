/**
 * @param {number[]} nums
 * @return {string[]}
 */
// 双指针思路
var summaryRanges = function(nums) {
  let i = 0
  let res = []
  let len = nums.length - 1
  while (i <= len) {
    //   开始的指针
    let start = i
    while (i <= len - 1 && nums[i] + 1 == nums[i + 1]) {
      i++
    }
    // 相等的话则说明只有一个数字
    if (start === i) {
      res.push(nums[i].toString())
    } else {
      res.push(`${nums[start]}->${nums[i]}`)
    }
    i++
  }
  return res
}
// console.log(summaryRanges([0, 1, 2, 4, 5, 7]))

// [0,1,2,4,5,7]
// ["0->2","4->5","7"]
