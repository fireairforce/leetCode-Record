/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  let a = Array(36).fill(-1)
  //    用来记录状态
  let x = 0
  let ans = 0
  a[0] = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      x = x ^ 1 // 00001
    } else if (s[i] === 'e') {
      x = x ^ 2 // 00010
    } else if (s[i] === 'i') {
      x = x ^ 4 // 00100
    } else if (s[i] === 'o') {
      x = x ^ 8 // 01000
    } else if (s[i] === 'u') {
      x = x ^ 16 // 10000
    }
    if (a[x] !== -1) {
      // 如果这个状态出现过,就用当前位置 减掉第一次出现的位置,
      // 得到更长的长度
      ans = Math.max(ans, i + 1 - a[x])
    } else {
      // 保存出现状态的开始位置
      a[x] = i + 1
    }
  }
  return ans
}
