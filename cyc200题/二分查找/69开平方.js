/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }
  let l = 1,
    h = x;
  while (l <= h) {
    let mid = l + (h - l) / 2;
    let sqrt = x / mid;
    if (sqrt === mid) {
      return parseInt(mid);
    } else if (mid > sqrt) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return parseInt(h);
};