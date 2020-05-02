class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      if len(nums) == 0:
        return 0
      if len(nums) == 1:
        return nums[0]
      # 初始化dp数组，dp[i]为nums[i]为结尾的子数组的最大值
      dp = nums[:]
      res = dp[0]
      for i in range(1, len(nums)):
        # 更新dp[i]
        dp[i] = max(dp[i], dp[i] + dp[i - 1]) 
        res = max(res, dp[i])
      return res
