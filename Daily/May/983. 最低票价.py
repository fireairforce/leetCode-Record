class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
      dp = [0] * (days[-1] + 1)
      for i in range(len(days)):
        dp[days[i]] = -1
      for i in range(1, days[-1] + 1):
        if dp[i] == 0:
          dp[i] = dp[i-1]
        else:
          dp[i] = min(dp[i-1] + costs[0], dp[max(0, i - 7)] + costs[1], dp[max(0, i - 30)] + costs[2])
      return dp[-1]