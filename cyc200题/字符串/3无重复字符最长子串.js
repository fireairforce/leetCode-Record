/**
 * @param {string} s
 * @return {number}
 */
/*
1.用一个mappper记录出现过并且没有被删除的字符
2.用一个滑动窗口记录当前index开始的最大的不重复的字符序列
3.用res去记录目前位置最大的长度，每次滑动窗口更新就去决定是否需要更新res 
*/
var lengthOfLongestSubstring = function(s) {
  const mapper = {}; // 用来记录已经出现过的字符
  let res = 0;
  let slidingWindow = [];
  for (let c of s) {
    if (mapper[c]) {
        // 如果这个字符已经出现过
      const delIndex = slidingWindow.findIndex((_c) => _c === c);
      for (let i = 0; i < delIndex; i++) {
          mapper[slidingWindow[i]] = false;
      }
      slidingWindow = slidingWindow.slice(delIndex + 1).concat(c);
    } else {
        // 如果这个字符没有出现过
        if(slidingWindow.push(c)>res) {
            res = slidingWindow.length;
        }
    }
    mapper[c] = true;
  }
  return res;
};
