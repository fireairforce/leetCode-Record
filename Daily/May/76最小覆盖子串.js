/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// s中能覆盖t的最小子串
// s = "ADOBECODEBANC",t = "ABC"
// res = "BNAC"
var minWindow = function (s, t) {
  s = s.split('')
  t = t.split('')
  let tMap = new Map()
  let window = new Map()
  let min = Number.MAX_SAFE_INTEGER
  let start = 0
  let l = 0,
    r = 0
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 1)
  }
  let match = 0
  while (r < s.length) {
    let c1 = s[r]
    if (tMap.has(c1)) {
      window.set(c1, window.has(c1) ? window.get(c1) + 1 : 1)
      if (window.get(c1) === tMap.get(c1)) {
        match++
      }
    }
    r++
    // 如果window中的串已经符合要求了,开始移动左边，找符合条件的最小值
    while (match === tMap.size) {
      if (r - l < min) {
        start = l
        min = r - l
      }
      //  更新一下最短的字符串
      let c2 = s[l]
      if (tMap.has(c2)) {
        window.set(c2, window.get(c2) - 1)
        if (window.get(c2) < tMap.get(c2)) {
          match--
        }
      }
      l++
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? '' : s.join('').slice(start, start + min)
}

// console.log(minWindow('ADOBECODEBANC', 'ABC'))
