/**
 * @param {number[]} A
 * @return {boolean}
 */
// 先检查能否被三整除
var canThreePartsEqualSum = function(A) {
  if (A.length === 0) {
    return false
  }
  let arrSum = 0
  for (let i = 0; i < A.length; i++) {
    arrSum += A[i]
  }
  let sum = Math.floor(arrSum / 3)
  let a1 = 0,
    a2 = 0,
    b2 = 0
  let flag = true
  for (let i = 0; i < A.length; i++) {
    a1 += A[i]
    if (a1 === sum && i < A.length - 2) {
      b2 = i + 1
      flag = false
      break
    }
  }
  if (flag) {
    return false
  }
  for (let i = b2; i < A.length; i++) {
    a2 += A[i]
    if (a2 === sum && i < A.length - 1) {
      return true
    }
  }
  return false
}
