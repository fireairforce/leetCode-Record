// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let sum = 0, stuff = 0;
//     for (let i = 1; i < prices.length; i++) {
//         sum += prices[i] - prices[i - 1];
//         console.log(sum);
//         if (sum < 0) sum = 0;
//         if (sum > stuff) stuff = sum;
//     }
//     return stuff;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length,sum = prices[0],dp=[],min=Number.MIN_SAFE_INTEGER;
    dp[0] = 0;

    for(let i=1;i<len;i++){
       dp[i] = Math.max(dp[i-1],prices[i]-sum);
       if(prices[i]<sum){
           sum = prices[i];
       }
    }
    for(let i =0 ;i<dp.length;i++){
      if(dp[i]>min){
          min = dp[i];
      }
    }
    return min;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));