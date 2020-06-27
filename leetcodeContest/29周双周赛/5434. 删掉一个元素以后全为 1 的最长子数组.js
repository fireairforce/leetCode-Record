/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let len = nums.length
  let max = 0
  for (let i = 0; i < len; i++) {
    let temp = 0;
    if (nums[i] === 0) {
      // 找0周围的1的数目
      for (let j = i + 1; j < len; j++) {
        if (nums[j] === 1) {
          temp++
        } else {
          break;
        }
      }
      for (let k = i - 1; k >= 0; k--) {
        if (nums[k] === 1) {
          temp++
        } else {
          break
        }
      }
    }
    max = Math.max(temp, max)
  }
  if (max === 0) {
    if (nums[0] === 0) {
      return 0;
    } else {
      return nums.length - 1
    }
  }
  return max;
};

// console.log(longestSubarray([1,1,1]));