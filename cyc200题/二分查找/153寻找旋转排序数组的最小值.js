/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
  * 前面一堆０，后面一堆１，然后寻找第一个１的二分问题
  */
var findMin = function(nums) {
  let l = 0,
    h = nums.length - 1;
  while (l < h) {
    let m = Math.floor(l + (h - l) / 2);
    if(nums[m]<=nums[h]) {
        h = m ; 
    } else {
        l = m + 1;
    }
  }
  return nums[l];
};
