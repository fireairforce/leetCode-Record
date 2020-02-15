/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const dp = [];
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = Array(s.length).fill(0);
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (s[i] === s[j]) {
        dp[i][j] = d[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][s.length - 1];
};
