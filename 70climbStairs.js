/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = []
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n];
};
console.log(climbStairs(5));
// 在第二阶的楼梯之后等于本身减两阶楼梯加本身减一阶楼梯