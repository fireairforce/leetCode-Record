class Solution:
  def isUnique(self, s: str) -> bool:
    return len(set(s)) == len(s)