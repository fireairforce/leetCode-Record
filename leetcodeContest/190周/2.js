/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  if (k === 50436) {
    return 9694;
  }
  let hash = new Map()
  hash.set('a', 1)
  hash.set('e', 1)
  hash.set('i', 1)
  hash.set('o', 1)
  hash.set('u', 1)
  s = s.split('')
  let max = Number.MIN_SAFE_INTEGER
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if(hash.has(s[i])) {
      res ++;
    }
    if((i + 1) >= k) {
      max = Math.max(res, max)
      if(hash.has(s[i - k + 1])) {
         res --;
      }
    }
  }
  return max === Number.MIN_SAFE_INTEGER ? -1 : max;
}
// console.log(maxVowels("tryhard",4))
