/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
const dis = (x1, y1, x2, y2) => {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
}

const pointToTri = (x, y, x1, y1, x2, y2) => {
  if (x1 === x2) {
    if (y <= Math.max(y1, y2) && y >= Math.min(y1, y2)) {
      return Math.abs(x - x1)
    } else {
      let b = dis(x, y, x1, y1)
      let c = dis(x, y, x2, y2)
      let result = Math.min(b, c)
      return result
    }
  } else if (y1 === y2) {
    if (x <= Math.max(x1, x2) && x >= Math.min(x1, x2)) {
      return Math.abs(y - y1)
    } else {
      let b = dis(x, y, x1, y1)
      let c = dis(x, y, x2, y2)
      let result = Math.min(b, c)
      return result
    }
  }
}

const judegCircus = (x, y, x1, y1, x2, y2) => {
  let x_1 = Math.max(x1, x2)
  let x_2 = Math.min(x1, x2)
  let y_1 = Math.max(y1, y2)
  let y_2 = Math.min(y1, y2)
  if (x < x_1 && x >x_2 && y < y_1 && y > y_2) {
    return true
  } 
  return false
}

var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
  let x = x_center
  let y = y_center
  let r = radius
  let x3 = x1,
    y3 = y2
  let x4 = x2,
    y4 = y1
  let l1 = pointToTri(x, y, x1, y1, x3, y3)
  let l2 = pointToTri(x, y, x1, y1, x4, y4)
  let l3 = pointToTri(x, y, x2, y2, x3, y3)
  let l4 = pointToTri(x, y, x2, y2, x4, y4)
  let L = Math.min(l1, Math.min(l2, Math.min(l3, l4)))
  let r1 = dis(x, y, x1, y1)
  let r2 = dis(x, y, x2, y2)
  let r3 = dis(x, y, x3, y3)
  let r4 = dis(x, y, x4, y4)
  let R = Math.max(r1, Math.max(r2, Math.max(r3, r4)))
  if (L <= r || judegCircus(x, y, x1, y1, x2, y2)) {
    return true
  } else {
    return false
  }
}

console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1))
console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1))
console.log(checkOverlap(1, 1, 1, -3, -3, 3, 3))
console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1))
