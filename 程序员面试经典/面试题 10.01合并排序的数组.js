/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  let insert = m + n - 1
  n--
  m--
  //   只要还有数字存
  while (m >= 0 || n >= 0) {
    //   A数组没值了 & 或B有值且符合条件
    if (m < 0 || (n >= 0 && B[n] >= A[m])) {
      A[insert] = B[n]
      insert--
      n--
    } else {
      A[insert] = A[m]
      insert--
      m--
    }
  }
}
