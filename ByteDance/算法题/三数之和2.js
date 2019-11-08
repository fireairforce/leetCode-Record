/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 对数组进行排序后然后采用二分搜索即可s
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }
  const list = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i;
    let r = nums.length - 1;
    while (l < r) {
      if (l === i) {
        l++;
      } else if (r === i) {
        r--;
      } else if (nums[l] + nums[r] + nums[i] === 0) {
        list.push([nums[l], nums[r], nums[i]]);
        while (nums[l] === nums[l + 1]) {
          l++;
        }
        l++;
        while (nums[r] === nums[r - 1]) {
          r--;
        }
        r--;
        continue;
      } else if (nums[l] + nums[r] + nums[i] > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return list;
};
// console.log("qaq");
console.log(threeSum([0, 2, -2, -1]));
