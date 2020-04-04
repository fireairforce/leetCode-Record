let f1 = (x1, y1, x, y) => {
  return Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y))
}
let f2 = (x1, y1, x2, y2, x, y) => {
  if (x1 == x2) {
    if (y <= Math.max(y1, y2) && y >= Math.min(y1, y2)) return Math.abs(x - x1)
    let t1 = f1(x1, y1, x, y)
    let t2 = f1(x2, y2, x, y)
    return Math.min(t1, t2)
  }
  if (y1 == y2) {
    if (x <= Math.max(x1, x2) && x >= Math.min(x1, x2)) return Math.abs(y - y1)
    let t1 = f1(x1, y1, x, y)
    let t2 = f1(x2, y2, x, y)
    return Math.min(t1, t2)
  }
}
var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
  let x3, y3, x4, y4
  let r = radius,
    x = x_center,
    y = y_center
  x3 = x1
  y3 = y2
  x4 = x2
  y4 = y1
  let l1 = f1(x1, y1, x, y)
  let l2 = f1(x2, y2, x, y)
  let l3 = f1(x3, y3, x, y)
  let l4 = f1(x4, y4, x, y)
  lmax = Math.max(l1, Math.max(l2, Math.max(l3, l4)))
  let r1 = f2(x1, y1, x3, y3, x, y)
  let r2 = f2(x1, y1, x4, y4, x, y)
  let r3 = f2(x2, y2, x3, y3, x, y)
  let r4 = f2(x2, y2, x4, y4, x, y)
  lmin = Math.min(r1, Math.min(r2, Math.min(r3, r4)))
  console.log(lmax,lmin);
  console.log(r);
  if (r < lmin || r > lmax) return false
  else if (r >= lmin && r <= lmax) return true
}

// console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1))
// console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1))
console.log(checkOverlap(1, 1, 1, -3, -3, 3, 3))
// console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1))