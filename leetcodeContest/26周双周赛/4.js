/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
  let dp = [1].concat(Array(target).fill(0));
  for (let j = 0; j < cost.length; j++) {
    for (let i = 1; i < target + 1; i++) {
        if(i - cost[j] >= 0) {
            dp[i] = dp[i] + dp[i - cost[j]];
        }
    }
  }
  return dp[dp.length - 1]
};

console.log(largestNumber([4,3,2,5,6,7,2,5,5], 9));
