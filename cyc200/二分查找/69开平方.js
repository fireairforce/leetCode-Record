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
    let mid = Math.floor( l + (h - l) / 2 );
    let sqrt = x / mid;
    if (sqrt === mid) {
      return mid;
    } else if (mid > sqrt) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return h;
};
// console.log(mySqrt(8));