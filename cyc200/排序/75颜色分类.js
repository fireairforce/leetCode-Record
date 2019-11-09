/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let r = -1,
    w = 0,
    b = nums.length;
  while (w < b) {
    if (nums[w] === 0) {
      change(nums, ++r, w++);
    } else if (nums[w] === 2) {
      change(nums, --b, w);
    } else {
      w++;
    }
  }
};

let change = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}


// console.log(sortColors([2,0,2,1,1,0]));