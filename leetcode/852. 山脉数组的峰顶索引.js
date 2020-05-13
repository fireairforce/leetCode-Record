/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let l = 0,
    r = A.length - 1
  //  通过二分从两边往中间贴
    while (l < r) {
    let mid = l + Math.floor((r - l) / 2)
    if (A[mid] > A[mid + 1]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return r
}
