/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, hor, ver) {
  const maxn = 1e9 + 7
  hor = hor.sort((a, b) => a - b)
  ver = ver.sort((a, b) => a - b)
  hor.unshift(0)
  hor.push(h)
  ver.unshift(0)
  ver.push(w)
  let x = 0
  for (let i = 1; i < hor.length; i++) {
    x = Math.max(x, hor[i] - hor[i - 1])
  }
  let y = 0
  for (let i = 1; i < ver.length; i++) {
    y = Math.max(y, ver[i] - ver[i - 1])
  }
  return ( x * y ) % maxn
}
