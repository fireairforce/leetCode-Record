/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  s = s.split('')
  let max = -1
  for (let i = 0; i < s.length ; i++) {
    let res = 0
    if (i === s.length - 1) {
      break;
    }
    for (let j = 0; j < i + 1; j++) {
      if (s[j] === '0') {
        res++
      }
    }
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === '1') {
        res += 1
      }
    }
    max = Math.max(res, max)
  }
  return max
}
// console.log(maxScore('011101'))
// console.log(maxScore('00111'))
// console.log(maxScore('00'))
