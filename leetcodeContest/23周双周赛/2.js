/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1
    } else {
      hash[s[i]]++
    }
  }
  let count = 0
  let tempLen = 0
  for (let key in hash) {
    if (hash[key] % 2 === 1) {
      count++
      tempLen += hash[key]
    }
  }
  if (count > k) {
    return false
  } else {
    if (count === k) {
      return true
    } else if (count < k) {
      if(s.length >= k) {
        return true
      } else {
        return false
      }
    }
  }
}

// console.log(canConstruct('annabelle', 2))
// console.log(canConstruct('leetcode', 3))
// console.log(canConstruct('true', 4))
// console.log(canConstruct('yzyzyzyzyzyzyzy', 2))
// console.log(canConstruct('cr', 7))
// console.log(canConstruct('aaa', 2))
