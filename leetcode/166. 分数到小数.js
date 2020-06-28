/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */

//  先全部转换成正数，记录余数出现的位置，如果下次再重复，则说明循环
var fractionToDecimal = function (numerator, denominator) {
  // 不断记录除数的位置，直到下一个除数出现
  if (!numerator) {
    return '0'
  }

  // 先处理好正负数的关系
  let sign = Math.sign(numerator) * Math.sign(denominator) > 0 ? '' : '-'
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)

  // 整数情况
  let str = '', reset
  reset = Math.floor(numerator / denominator)
  numerator %= denominator
  if (!numerator) {
    return sign + reset + ''
  }

  // 找循环节
  let index = 0, map = {}, result = reset + '.'
  while(map[numerator] === undefined) {
    map[numerator] = index ++;
    numerator *= 10;
    str += Math.floor(numerator / denominator)
    numerator %= denominator
    if (!numerator) {
      return sign + result + str
    }
  }
  let pos = map[numerator]
  return `${sign}${result}${str.slice(0, pos)}(${str.slice(pos)})`
};
