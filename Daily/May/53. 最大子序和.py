class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      dp[0] = nums[0]
      for i in range(1, len(nums)):
          dp[i] = max(nums[i], dp[i-1] + nums[i])
      res = -1
      for i in range(len(dp))
        res = max(res, dp[i])
    return res
