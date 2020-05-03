/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let max = -1
  for (let i = 0; i < nums.length; i++) {
    let flag = true;
    let tempmax = -1;
    let tempmin = 1e9 + 7
    for (let j = i; j < nums.length; j++) {
      if(nums[j] < tempmin) {
        tempmin = nums[j]
      }
      if(nums[j] > tempmax) {
        tempmax = nums[j]
      }
      if(Math.abs(tempmax - tempmin) > limit) {
         if(Math.abs(j - i) > max) {
           max = Math.abs(j - i)
         }
         flag = false
         break
      } 
    }
    if (flag) {
      if(Math.abs(nums.length - i) > max) {
        max = Math.abs(nums.length - i);
        break;
      }
    }
  }
  return max;
}

// console.log(longestSubarray([8,2,4,7], 4));
// console.log(longestSubarray([10,1,2,4,7,2],5));
// console.log(longestSubarray([4,2,2,2,4,4,2,2], 0));