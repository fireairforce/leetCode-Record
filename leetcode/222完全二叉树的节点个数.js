/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0
  }
  return countNodes(root.left) + countNodes(root.right) + 1
}

const solve = (root) => {
  const calculate = (node) => {
    let depth = 0
    while (node.left) {
      node = node.left
      depth++
    }
    return depth
  }
  let d = calculate(root)
  const exists = (idx, depth, node) => {
    
  }

}
