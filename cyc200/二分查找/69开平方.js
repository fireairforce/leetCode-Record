/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0, r = x;
  while(l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid >= x) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }
  return l;
};
console.log(mySqrt(8));