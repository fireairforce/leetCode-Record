// 无重复字符的最长子串
var lengthOfLongestSubstring = function (s) {
  let num = 0, res = 0
  let str = ''
  for (item of s) {
    // str 里面没有
    if (str.indexOf(item) === - 1) {
      str += item;
      num ++
      res = Math.max(res, num)
    } else {
      str += item
      // 如果str 里面已经有了这个 item 字符，那么就从那里把 str 直接切开就行了
      str = str.slice(str.indexOf(item) + 1)
      // num 保存的是当前的 str 的长度， res 则始终维护一个最大的值
      num = str.length
    }
  }
  return res;
};

console.log(lengthOfLongestSubstring(['acccs', 'acaaa', 'ac']));