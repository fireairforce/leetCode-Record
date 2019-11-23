/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=i;j++){
            dp[i] += dp[j-1] * dp[i-j];
        }
    }
    return dp[n];
};