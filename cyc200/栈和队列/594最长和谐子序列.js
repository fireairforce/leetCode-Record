/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  nums.sort((a, b) => a - b);
  let begin = 0,
    res = 0;
  for (let end = 0; end < nums.length; end++) {
      while(nums[end] - nums[begin] > 1) {
          begin ++;
      }
      if(nums[end] - nums[begin] === 1) {
          res = Math.max(res, end - begin + 1);
      }
  }
  return res;
};
