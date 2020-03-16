/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let res = ''
  for (let i = 0; i < S.length; i++) {
    let k = i + 1
    let count = 1
    res += S[i]
    while (k < S.length && S[i] === S[k]) {
      count++
      k++
    }
    i += count - 1
    res += count
  }
  return res.length >= S.length ? S : res
}

// console.log(compressString("aabcccccaaa"))
// console.log(compressString("abbccd"))