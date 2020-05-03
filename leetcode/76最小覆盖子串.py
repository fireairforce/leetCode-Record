class Solution:
    def minWindow(self, s: str, t: str) -> str:
      from collections import Counter
      t = Counter(t)
      lookup = Counter()
      start = 0
      end = 0
      minLen = float('inf')
      res = ''
      while end < len(s):
        lookup[s[end]] += 1
        end += 1
        while all(map(lambda x: lookup[x] >= t[x], t.keys())):
          if end - start < minLen:
            res = s[start: end]
            minLen = end - start
          lookup[s[start]] -= 1
          start += 1
      return res