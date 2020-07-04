/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let last = m + n - 1;
  while(n) {
    if (m === 0 || nums1[m-1] <= nums1[n-1]) {
      nums1[last --] = nums2[--n]
    } else {
      nums1[last --] = nums1[--m]
    }
  }
};