/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length
  let left = 0,
    right = len - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    console.log('left: ', left);
    console.log('right: ', right);
    console.log('mid: ', mid);
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1;
      }
    }
  }
};

console.log(search(
  [4, 5, 6, 7, 0, 1, 2], 0
));