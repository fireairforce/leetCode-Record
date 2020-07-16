/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || s.length === 0) {
    return "";
  }
  let res = s[0];
  const dp = [];
  //   dp[i][j]用于判断从i到j能否形成回文串
  //   倒着遍历是因为dp[i][j]会依赖于dp[i+1][j-1]
  for (let i = s.length; i >= 0; i--) {
    dp[i] = [];
    // 能够满足i到j为回文串的几种情况
    for (let j = i; j < s.length; j++) {
      if (j === i) {
        dp[i][j] = true;
      } else if (j - i === 1 && s[i] === s[j]) {
        dp[i][j] = true;
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      }
      //   res用于取出最长的回文子串
      if (dp[i][j] && j - i + 1 > res.length) {
        //   如果i到j的串大于之前保存的最大串的长度那就修改res的值
        res = s.slice(i, j + 1);
      }
    }
  }
  return res;
};

console.log(longestPalindrome('babad'));