/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map()
  map.set(0, 1)
  let sum = 0,
    res = 0

  for (let i = 0; i < nums.length; i++) {
    // 求一个前缀和
    sum += nums[i]
    // 这里也太巧妙了
    // 当前的和 - 以前的和里面 -> 如果会出现k 把值直接加上就行了
    if (map.has(sum - k)) {
      res += map.get(sum - k)
    }
    // 每次都把sum的值存进去数组里面去
    map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1)
  }
  return res
}
