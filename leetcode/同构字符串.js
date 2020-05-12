/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map()
  const map2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      if (map2.has(t[i])) {
        return false
      } else {
        map.set(s[i], t[i])
        map2.set(t[i], s[i])
      }
    } else {
      if (map.get(s[i]) !== t[i]) {
        return false
      }
    }
  }
  return true
}
