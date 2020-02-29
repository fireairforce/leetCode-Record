/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  let str = num + ''
  let dp = Array(str.length + 1).fill(1)
  for (let i = 2; i <= str.length; i++) {
    if (
      (str[i - 1] <= '5' && '1' <= str[i - 2] && str[i - 2] <= '2') ||
      str[i - 2] === '1'
    ) {
    //   console.log(str[i], i)
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[dp.length - 1]
}

// console.log(translateNum(624))
// console.log(translateNum(12258))
// console.log(translateNum(18580))
// console.log(translateNum(419605557))
// output : 4
