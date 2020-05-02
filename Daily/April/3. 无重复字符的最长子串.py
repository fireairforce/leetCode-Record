class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      # 典型的滑动窗口解
      if not s: return 0
      lookup = list()
      max_len = 0
      cur_len = 0
      for i in range(len(s)):
        temp = s[i]
        if not temp in lookup:
          lookup.append(temp)
          cur_len += 1
        # 如果该值在窗口里面已经存在了
        else:
          # 先获取位置
          index = lookup.index(temp)
          # 然后把窗口截开
          lookup = lookup[index + 1:]
          lookup.append(temp)
          cur_len = len(lookup)
        # 更新最大长度
        if cur_len > max_len:
          max_len = cur_len
      return max_len