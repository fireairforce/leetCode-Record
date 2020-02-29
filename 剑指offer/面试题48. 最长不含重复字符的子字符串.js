/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = {}
  let res = 0
  let slidingWindow = []
  for (let item of s) {
    if (map[item]) {
      let deleteIndex = slidingWindow.findIndex((_s) => _s === item)
      for (let i = 0; i < deleteIndex; i++) {
        map[slidingWindow[i]] = false
      }
      slidingWindow = slidingWindow.slice(deleteIndex + 1).concat(item)
    } else {
      if (slidingWindow.push(item) > res) {
        res = slidingWindow.length
      }
    }
    map[item] = true
  }
  return res
}
