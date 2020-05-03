class Solution:
    def maxScore(self, s: str) -> int:
      right = s[1:].count('1')
      left = s[0].count('0')
      ans = left + right
      for c in s[1: -1]:
        if c == '0':
          left += 1
        else:
          right += 1
        ans = max(ans, left + right)
      return ans