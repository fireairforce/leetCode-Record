/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b)
  let sum = 0
  let len = satisfaction.length
  for (let i = 0; i < len; i++) {
    let temp = 0
    for (let j = i; j < len; j++) {
      temp += (j - i + 1) * satisfaction[j]
    }
    sum = Math.max(temp, sum)
  }
  return sum
}

console.log(maxSatisfaction([-1, -8, 0, 5, -9]))
