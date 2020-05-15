/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = new Map()
  map.set(0 ,1)
  let sum = 0, res = 0

  for (let i = 0;i < nums.length;i++) {
    // 求一个前缀和
    sum += nums[i]
    if (map.has(sum - k)) {
      res += map.get(sum - k)
    }
    map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1)
  }
  return res;
};