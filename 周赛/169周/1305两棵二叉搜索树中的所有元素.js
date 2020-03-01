/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  let res1 = [];
  let res2 = [];
  zx(root1, res1);
  zx(root2, res2);
  res1 = [...res1, ...res2].sort((a, b) => a - b);
  return res1;
};
const zx = (root, list) => {
  if (!root) {
    return;
  }
  zx(root.left, list);
  list.push(root.val);
  zx(root.right, list);
};
