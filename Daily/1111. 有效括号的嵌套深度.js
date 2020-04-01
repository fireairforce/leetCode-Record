/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  let ans = Array(seq.length).fill(0)
  let idx = 0
  for (let i = 0; i < seq.length; i++) {
    ans[idx++] = seq[i] === '(' ? idx & 1 : (idx + 1) & 1
  }
  return ans
}
