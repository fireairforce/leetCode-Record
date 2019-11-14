/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length < 2) {
    return 0;
  }
  let max = Number.MIN_SAFE_INTEGER;
  let count = -1;
  for(let i = 0;i<nums.length;i++){
      if(nums[i] > max){
          max = nums[i];
          count = i;
      }
  }
  nums.sort((a,b)=>a-b);
  if(Math.floor(max / nums[nums.length - 2]) >= 2) {
     return count;
  }
  return -1;
};
