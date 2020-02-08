/**
 * @param {number[]} prices
 * @return {number}
 */

// 题目三个维度，将其降为两个维度
// 将买、卖、冻降维成持有股票和不持股票
// hold[i] = max(hold[i-1],notHold[i-2]-prices[i])
// 持股的收益为之前一天持股股票的收益(没卖)，前两天不持有股票的收益-当前的股价
// notHold[i] = max(nothold[i-1],hold[i-1]+prices[i])
var maxProfit = function(prices) {
  let n = prices.length
  if (n === 0) {
    return 0
  }
  let hold = Array(n).fill(0)
  //   最开始的收益是负的
  hold[0] = -prices[0]
  let notHold = Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    if (i >= 2) {
      hold[i] = Math.max(hold[i - 1], notHold[i - 2] - prices[i])
    } else {
      hold[i] = Math.max(hold[i - 1], -prices[i])
    }
    notHold[i] = Math.max(notHold[i - 1], hold[i - 1] + prices[i])
  }
  return notHold[n - 1]
}
