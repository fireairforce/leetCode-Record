/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = []
  if (nums.length <= 1) {
    return nums.length === 0 ? 0 : nums[0]
  }
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  // console.log(dp)
  return dp[nums.length - 1]
}
// console.log(rob([1, 2, 3, 1]));

// 倒着往回推
const solve = (arr) => {
  let len = arr.length
  let dp = Array(len + 2).fill(0)

  for (let i = len - 1; i >= 0; i--) {
    // 选择不抢劫 或者抢劫
    dp[i] = Math.max(dp[i + 1], arr[i] + dp[i + 2])
  }

  return dp[0]
}

console.log(solve([1, 2, 3, 1]));