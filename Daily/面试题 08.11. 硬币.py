class Solution:
    def waysToChange(self, n: int) -> int:
      conins = [25, 10, 5, 1]
      dp = [0] * (n + 1)
      dp[0] = 1
      for i in range(len(conins)):
        for j in range(conins[i], n + 1):
          dp[j] += dp[j - conins[i]]
      return dp[-1] % 1000000007