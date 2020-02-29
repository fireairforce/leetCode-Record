/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  if (postorder.length === 0) {
    return true
  }
  return verify(postorder, 0, postorder.length - 1)
  function verify(seq, start, end) {
    if (start >= end) {
      return true
    }
    let i = start,
      j = end - 1
    while (i < end && seq[i] < seq[end]) {
      i++
    }
    while (j >= start && seq[j] > seq[end]) {
      j--
    }
    if (i < j) {
      return false
    }
    return verify(seq, start, i - 1) && verify(seq, j + 1, end - 1)
  }
}
