/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let len = cardPoints.length,
    sum = 0
  for (let cardPoint of cardPoints) {
    sum += cardPoint
  }
  let min = Number.MAX_SAFE_INTEGER
  let length = len - k
  let temp = 0
  for (let i = 0; i < len; i++) {
    temp += cardPoints[i]
    if (i >= length) {
      temp -= cardPoints[i - length]
    }
    if (i >= length - 1) {
      min = Math.min(min, temp)
    }
  }
  // 总和减去中间窗口的最小值
  return sum - min
}
