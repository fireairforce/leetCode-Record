/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// dp公式为 dp[i] = max(dp[i-1],dp[i])
var maxEnvelopes = function(envelopes) {
  if (envelopes.length === 0) {
    return 0;
  }
  envelopes.sort((a, b) => a[0] - b[0]);
  let rows = envelopes.length;
  let dp = [];
  for (let i = 0; i < rows; i++) {
    dp[i] = 1;
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      if (
        envelopes[i][0] > envelopes[j][0] &&
        envelopes[i][1] > envelopes[j][1]
      ) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return dp.sort((a,b)=>b-a)[0];
};


// console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));