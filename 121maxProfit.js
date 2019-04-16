/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let sum = 0, stuff = 0;
    for (let i = 1; i < prices.length; i++) {
        sum += prices[i] - prices[i - 1];
        console.log(sum);
        if (sum < 0) sum = 0;
        if (sum > stuff) stuff = sum;
    }
    return stuff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))