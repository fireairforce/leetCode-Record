/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let res = []
  const zx = (root, res) => {
    if (!root) {
      return
    }
    zx(root.left, res)
    res.push(root.val)
    zx(root.right, res)
  }
  zx(root, res)
  return res[res.length - k]
}
