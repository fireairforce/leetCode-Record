/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let hash = {}
  for (let i = 0; i < chars.length; i++) {
    if (hash[chars[i]]) {
      hash[chars[i]]++
    } else {
      hash[chars[i]] = 1
    }
  }
  let res = 0
  for (let i = 0; i < words.length; i++) {
    let flag = true
    let newHash = JSON.parse(JSON.stringify(hash))
    for (let j = 0; j < words[i].length; j++) {
      if (!newHash[words[i][j]]) {
        flag = false
        break
      } else {
        newHash[words[i][j]]--
      }
    }
    if (flag) {
      res += words[i].length
    }
  }
  return res
}
