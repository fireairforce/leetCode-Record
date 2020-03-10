/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  s = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  let index = 0
  let len = s.length - 1
  let flag = []
  let res = ''
  while (index <= len) {
    let temp = ''
    for (let i = 0; i < s.length; i++) {
      if (
        (flag.indexOf(i) === -1 &&
          temp &&
          s[i].charCodeAt() > temp.charCodeAt()) ||
        (!temp && flag.indexOf(i) === -1)
      ) {
        res += s[i]
        temp = s[i]
        flag.push(i)
        index++
      }
    }
    temp = ''
    for (let i = s.length - 1; i >= 0; i--) {
      if (
        (flag.indexOf(i) === -1 &&
          temp &&
          s[i].charCodeAt() < temp.charCodeAt()) ||
        (!temp && flag.indexOf(i) === -1)
      ) {
        res += s[i]
        temp = s[i]
        flag.push(i)
        index++
      }
    }
  }
  return res
}
