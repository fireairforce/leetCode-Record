class Solution:
    def singleNumbers(self, nums: List[int]) -> List[int]:
      ret = 0
      a = 0
      b = 0
      for n in nums:
        ret ^= n
      h = 1
      while(ret & h == 0): 
        h <<= 1
      for n in nums: 
        if (h & n == 0):
          a ^= n 
        else:
          b ^= n 
      return [a, b]