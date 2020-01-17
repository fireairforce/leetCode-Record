/**
 * @param {string} s
 * @return {number}
 */
// 中心拓展法
var countSubstrings1 = function (s) {
  if (!s) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += count(s, i, i);
    res += count(s, i, i + 1);
  }
  return res;
};

const count = (s, start, end) => {
  let count = 0;
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    count++;
    start--;
    end++;
  }
  return count;
}


// 也可以使用动态规划
// dp[i][j] = d[i+1][j-1] && s[i] = s[j]
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (!s) {
    return 0;
  }
  let dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array();
    for (let j = 0; j < s.length; j++) {
      dp[i][j] = 0;
    }
  }
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      if ((s[i] === s[j]) && ((i - j <= 1) || dp[j + 1][i - 1])) {
        dp[j][i] = 1;
        sum++;
      }
    }
  }
  return sum;
};