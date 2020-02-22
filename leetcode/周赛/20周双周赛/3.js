/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  let sum = 0
  s = s.split('')

  let l = 0,
    r = s.length - 1
  while (l <= r && s.length) {
    if (judge(s.slice(1))) {
      sum++
      s = s.slice(1)
      l++
    }
    if (judge(s.slice(0, s.length - 1))) {
      sum++
      s = s.slice(0, s.length - 1)
      r--
    }
  }
  return sum
}

const judge = (s) => {
  let a1 = s.indexOf('a')
  let b1 = s.indexOf('b')
  let c1 = s.indexOf('c')
  if (a1 !== 0 && b1 !== 0 && c1 !== 0) {
    return true
  }
  return false
}

console.log(numberOfSubstrings('abcbbbd'));