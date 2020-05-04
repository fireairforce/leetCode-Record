class Solution:
  def canPermutePalindrome(self, s: str) -> bool:
    n = len(s)
    res = 0
    cur = []
    s = sorted(s)
    for i in s:
      if i in cur:
        res -= 1
        cur.remove(i)
      else:
        cur.append(i)
        res += 1
    return res <= 1
