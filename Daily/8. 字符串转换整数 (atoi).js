/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let res = 0,
    i = 0
  while (str[i] === ' ' && i < str.length) {
    i++
  }
  let flag = 0
  if (str[i] === '-') {
    flag = 1
  }
  if (str[i] === '+' || str[i] === '-') {
    i++
  }
  let result = 0
  while (i < str.length && str[i] >= '0' && str[i] <= '9') {
    res = str[i].charCodeAt() - '0'.charCodeAt()
    if (result >= Math.pow(2, 31)) {
      return flag ? -Math.pow(2, 31) : Math.pow(2, 31) - 1
    }
    result = result * 10 + res
    i++
  }
  if (result >= Math.pow(2, 31)) {
    return flag ? -Math.pow(2, 31) : Math.pow(2, 31) - 1
  } else {
    return flag ? -result : result
  }
}
