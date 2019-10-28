/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let count = 1;
  let maxCount = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      count++;
    } else if (nums[i + 1] === nums[i]) {
      continue;
    } else {
      if (count > maxCount) {
        maxCount = count;
      }
      count = 1;
    }
  }
  return Math.max(count, maxCount);
};
