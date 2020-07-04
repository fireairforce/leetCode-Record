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
其实这时候就可以做一些优化的:
```js
let len = prices.length;
let a1 = 0, a2 = -Infinity;
for (let i = 0;i<len;i++) {
  a1 = Math.max(a1, a2 + prices[i])
  a2 = Math.max(a2, -prices[i])
}
return a1;
```

k = 无穷
那么就可以认为 k 和 k-1 是一样的，可以这样改写框架：
```js
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
// 因为 k 是无穷的，所以这里 k - 1就可以变成k
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
= max(dp[i-1][k][1], dp[i-1][k][0] - prices[i])

// 那么我们就发现这种情况下 k 已经不会变化了，所以就不用记录 k 这个变量了
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
```

那么这次的代码就是：
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
    // 因为这里可以多次买卖股票了，所以有股票的时候的最大收益可以是之前买股票产生的
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i])
}
// 最后手上没有股票的时候肯定收益是最高的
return dp[len-1][0];
```

k = 正无穷 && 有了交易冷冻期
需要每次卖了之后等一天才能交易，把这个特点融入上一题的状态转移方程式即可。
```js
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
// 在第 i 天选择持股的时候，要从 i-2 进行买股状态转移即可
dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])
```

因此代码可以是：
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
    dp[i][1] = Math.max(dp[i-1][1], (i === 1 ? 0 : dp[i-2][0])-prices[i])
}
// 最后手上没有股票的时候肯定收益是最高的
return dp[len-1][0];
```

k=正无穷且包含手续费
那么卖股票的时候把手续费剪掉就好了。


k = 2
k = 2 的情况和之前的情况稍微有些不同，因为上面的情况都和 k 的关系不会太大。要么 k 是正无穷，状态转移就和 k 没有关系了；要么 k = 1，跟 k = 0这个 `base case` 挨得比较近，最后也没有存在感。
当 k = 2 和后面 k 是任意正整数的情况中，对 k 的处理就凸显出来了。直接写代码并且来分析原因：
```js
// 原始的动态转移方程，没有可以化简的地方
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k - 1][0] - prices[i])
```

在这道题里面，由于没有消除 k 的影响，因此我们需要对 k 进行一个穷举：
```js
 let maxK = 2;
  let len = prices.length;
  if (len === 0) {
      return 0;
  }
  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = []
    for (let k = maxK; k >= 0; k--) {
      dp[i][k] = []
      for (let j = 0; j < 2; j++) {
        dp[i][k][j] = 0;
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let k = maxK; k >= 1; k--) {
      if (i === 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i]
        continue;
      }
      // 卖了上一次的股票或者没有操作选取最大的利益
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      // 买了新的股票或者没有做任何操作
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }
  // 一共穷举了 len * maxK * 2 个状态
  return dp[len - 1][maxK][0];
```

k = any integer 
当 k 为任意整数的时候，这个时候给 k 增加一个范围就可以了
```js
 let dp = []
  let len = prices.length;
  if (len === 0) {
    return 0
  }
  for (let i = 0; i < len; i++) {
    dp[i] = []
    for (let k1 = 0; k1 <= k; k1++) {
      dp[i][k1] = []
      for (let j = 0; j < 2; j++) {
        dp[i][k1][j] = 0
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let k1 = k; k1 >= 1; k1--) {
      if (i === 0) {
        dp[i][k1][0] = 0;
        dp[i][k1][1] = -prices[i]
        continue;
      }
      dp[i][k1][0] = Math.max(dp[i - 1][k1][0], dp[i - 1][k1][1] + prices[i])
      dp[i][k1][1] = Math.max(dp[i - 1][k1][1], dp[i - 1][k1 - 1][0] - prices[i])
    }
  }
  return dp[len - 1][k][0];
```