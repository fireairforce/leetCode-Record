/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  k = nums.length - k + 1
  let l = 0,
    r = nums.length - 1
  let res = -1
  const quickSort = (nums, left, right, index) => {
    if (left >= right) {
      res = nums[left];
      return
    }
    let x = nums[Math.floor((left + right) >> 1)],
      i = left - 1,
      j = right + 1
    while (i < j) {
      while (nums[++i] < x);
      while (nums[--j] > x);
      if (i < j) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
    let s1 = j - left + 1
    if (index <= s1) {
      quickSort(nums, left, j, index)
    } else {
      quickSort(nums, j + 1, right, index - s1)
    }
  }
  quickSort(nums, l, r, k)
  return res
}
