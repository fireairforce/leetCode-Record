/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let first = search(nums, target);
  let last = search(nums, target + 1) - 1;
  if (first === nums.length || nums[first] !== target) {
    return [-1, -1];
  } else {
    return [first, Math.max(first, last)];
  }
};

let search = (nums, target) => {
  let l = 0,
    h = nums.length;
  while (l < h) {
    let m = Math.floor(l + (h - l) / 2);
    if (nums[m] >= target) {
      h = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
