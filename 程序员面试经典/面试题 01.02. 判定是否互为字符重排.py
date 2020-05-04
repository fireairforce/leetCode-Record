class Solution:
    def CheckPermutation(self, s1: str, s2: str) -> bool:
      from collections import Counter
      if len(s1) != len(s2):
        return False
      dic1 = Counter(s1)
      dic2 = Counter(s2)
      for i in s1:
        if dic1[i] != dic2[i]:
          return False
      return True