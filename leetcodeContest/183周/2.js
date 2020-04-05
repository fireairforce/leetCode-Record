/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let sum = 0
  s = s.split('')
  while (s.length !== 1) {
    if (s[s.length - 1] === '1') {
      for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '1' && i !== 0) {
          s[i] = '0'
          continue
        } else if (s[i] === '0' && i !== 0) {
          s[i] = '1'
          break
        }
        if(i === 0 && s[i] === '1') {
          s[i] = '0'
          s.unshift('1')
          break
        }
      }
    } else {
      s = s.slice(0, s.length - 1)
      if (s.length === 1 && s[0] === '1') {
        sum ++ 
        break
      }
    }
    sum++
  }
  return sum
}
