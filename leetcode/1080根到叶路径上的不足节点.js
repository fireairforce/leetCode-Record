function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
  if (isInsufficient(root, 0, limit)) {
    return null
  }
  return root
}

const isInsufficient = (root, sum, limit) => {
  if (!root) {
    return true
  }
  sum += root.val
  if (!root.left && !root.right) {
    return sum < limit
  }
  let l = isInsufficient(root.left, sum, limit)
  let r = isInsufficient(root.right, sum, limit)
  if (l) {
    root.left = null
  }
  if (r) {
    root.right = null
  }
  return l && r
}
