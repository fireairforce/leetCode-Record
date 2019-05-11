/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2;i<=N;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[N];
};
// console.log(fib(3));