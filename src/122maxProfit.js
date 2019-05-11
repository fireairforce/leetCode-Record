/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length,sum = 0;
    for (let i = 1; i < len; i++) {
       if(prices[i]>prices[i-1]){
          sum += prices[i] - prices[i-1];
       }
    }
    return sum;
};
console.log(maxProfit([7,6,4,3,1]));