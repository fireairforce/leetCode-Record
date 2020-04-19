/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let word = []
  let numer = []
  for (let i = 0; i < s.length; ++i) {
    if ('0' <= s[i] && s[i] <= '9') {
      numer.push(s[i])
    } else if (
      'a'.charCodeAt() <= s[i].charCodeAt() &&
      s[i].charCodeAt() <= 'z'.charCodeAt()
    ) {
      word.push(s[i])
    }
  }
  numer = numer.join('')
  word = word.join('')
  let len1 = numer.length
  let len2 = word.length
  if (Math.abs(len1 - len2) > 1) {
    return ''
  } else {
    let res = ''
    let i = 0,
      j = 0
    if (len1 > len2) {
      while (j <= len2 - 1) {
          res += numer[i]
          res += word[j]
          i++
          j++
      }
      if (i === len1 - 1) {
        res += numer[i]
      }
      return res
    } else {
      while (i <= len1 -1) {
          res += word[j]
          res += numer[i]
          i++
          j++
      }
      if (j === len2 - 1) {
        res += word[j]
      }
    return res
    }
  }
}

// console.log(reformat("a0b1c2"));
// console.log(reformat("leetcode"));
// console.log(reformat("1229857369"));
// console.log(reformat("covid2019"));
// console.log(reformat("ab123"));



