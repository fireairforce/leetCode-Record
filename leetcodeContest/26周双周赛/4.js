/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  // dp[i]表示和为i时数字最长可以有多长
  let dp = [1].concat(Array(target + 5).fill(-1e5))
  for (let i = 1; i <= target; ++i) {
    for (let j = 1; j <= 9; j++) {
      let c = cost[j - 1]
      if (i >= c) {
        dp[i] = Math.max(dp[i], dp[i - c] + 1)
      }
    }
  }
  // console.log(dp[target]);
  if (dp[target] < 0) {
    return '0'
  } else {
    let str = ''
    let now = target
    // 然后倒着推结果
    while (now > 0) {
      for (let i = 8; i >= 0; i--) {
        let c = cost[i]
        if (now >= c && dp[now] === dp[now - c] + 1) {
          str += String(i)
          now -= c
          break
        }
      }
    }
    return str
  }
}

// console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9))
