/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  nums = new Set(nums);
  let max = 0,
    y = 0;
  nums.forEach((x) => {
    if (!nums.has(x - 1)) {
      y = x + 1;
      while (nums.has(y)) {
        y++;
      }
      max = Math.max(max, y - x);
    }
  });
  return max;
};
