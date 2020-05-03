class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
      if len(cardPoints) == k:
        return (sum(cardPoints))
      else:
        l = len(cardPoints) - k
        left = 0
        right = len(cardPoints) - k
        sum1 = sum(cardPoints[left:right])
        mi = sum1
        for i in range(k):
          re = sum1 - cardPoints[i] + cardPoints[i + l]
          sum1 = re
          if re < mi:
            mi = re
        return sum(cardPoints) - mi
