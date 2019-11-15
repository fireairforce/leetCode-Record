/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let flag = {};
  for (let i = 0; i < nums1.length; i++) {
    flag[nums1[i]] = 0;
  }
  for (let i = 0; i < nums1.length; i++) {
    flag[nums1[i]]++;
  }
  let res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (flag[nums2[i]]) {
      flag[nums2[i]]--;
      res.push(nums2[i]);
    }
  }
  return res;
};

// console.log(intersect([4, 9, 5],[9, 4, 9, 8, 4]));
