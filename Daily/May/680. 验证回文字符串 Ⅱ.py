class Solution:
  def validPalindrome(self, s: str) -> bool:
    def isValid (s,i,j):
      while i < j:
        if s[i] != s[j]:
          return False
        i += 1
        j -= 1
      return True
    i ,j = 0,len(s)
    while i < j:
      if s[i] != s[j]:
        return isValid(s, i + 1, j) or isValid(s, i , j - 1)
      i += 1
      j -= 1
    return True