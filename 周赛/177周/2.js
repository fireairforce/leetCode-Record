/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  let sum = 0
  let res = []
  for (let i = 0; i < n; i++) {
    if (leftChild[i] !== -1) {
      sum++
      if (res.indexOf(leftChild[i]) === -1) {
        res.push(leftChild[i])
      }
    }
    if (rightChild[i] !== -1) {
      sum++
      if (res.indexOf(rightChild[i]) === -1) {
        res.push(rightChild[i])
      }
    }
  }
  if (res.length === n - 1 && sum == n - 1) {
    return true
  }
  return false
}

// console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]))
