/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let arr1 = []
  let arr2 = []
  let len = nums.length;
  for (let i = 0;i<n;i++) {
    arr1.push(nums[i])
  }
  for (let i = n;i<len;i++) {
    arr2.push(nums[i])
  }
  console.log(arr1);
  console.log(arr2);
  let res = []
  for (let i = 0;i<arr1.length;i++) {
    res.push(arr1[i])
    res.push(arr2[i])
  }
  return res;
};

// console.log(shuffle([2,5,1,3,4,7], 3));