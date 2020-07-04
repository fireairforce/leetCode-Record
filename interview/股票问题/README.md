## Notes
TL;DR
股票问题在 `lc` 上一共有六种类型：
- 只进行一次交易，相当于 k = 1
- 不限制交易次数，相当于 k = 正无穷
- 只进行两次交易，相当于 k = 2
- 剩下两题也是不限制交易次数，只是添加了交易冷冻期和手续费的条件，其实就是第二题的变种。

### 状态
每次都有三种选择：买入、卖出、无操作。
那么我们要求的就是 `dp[n-1][K][0]`最后0,1表示用户手上有无股票，n表示天数，K表示允许的交易次数。dp数组的值表示利润。

### 转移方程式
有以下几种情况：
```js
dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1] + prices[i])
// 今天没股，要么是昨天没股票，要么是昨天有然后卖了

dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])

// 今天有股票，要么是昨天有，要么是昨天买股票了
```
注意在选择买卖股票的情况下，要对 k 进行加减的操作

然后定义以下 `base case` 的情况：
```js
dp[-1][k][0] = 0;
// 因为 i 是从 0 开始的，所以 i = -1 意味着还没开始，这时候的利润是 -无穷
dp[-1][k][1] = -Infinity
dp[i][0][0] = 0
dp[i][0][1] = -Infinity
```

总结一下上面状态转移方程式：
```js
dp[-1][k][0] = dp[i][0][0] = 0;
dp[-1][k][1] = dp[i][0][1] = -Infinity

// 状态转移方程式
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1[k-1][0] - prices[i])
```

### Solve Question
k = 1
直接套状态转移方程式，根据 `base case`，可以做一些化简：
```js
dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i]) = max(-prices[i])
// k = 0 时的base case，所以 dp[i-1][0][0] = 0
// 同时这里的 k 都是 1,不会改变，即 k 对状态转移已经没有影响了
// 因此可以简化掉 k
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], -prices[i])
```

那么股票的代码就是：
```js
let dp = []
let len = prices.length
if (len === 0) {
    return 0;
}
for (let i = 0;i<len;i++) {
    dp[i] = Array(2).fill(0);
}
for (let i = 0;i<len;i++) {
    if (i === 0) {
        dp[i][0] = 0;
        dp[i][1] = -prices[i];
        continue
    }
    // 二维 0 表示手上没股票。1表示有股票
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp[i][1] = Math.max(dp[i-1][1], -prices[i])
}
// 最后手上没有股票的时候肯定收益是最高的
return dp[len-1][0];
```
