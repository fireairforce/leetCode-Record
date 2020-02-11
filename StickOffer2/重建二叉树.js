function reConstructBinaryTree(pre, vin) {
  // write code here
  if (pre.length <= 0 && vin.length <= 0) {
    return;
  }
  let temp = pre[0];
  let index = vin.indexOf(temp);
  let preLeft = pre.slice(1, index + 1),
    preRight = pre.slice(index + 1);
  let vinLeft = vin.slice(0, index),
    vinRight = vin.slice(index + 1);
  let root = {
      val:temp
  };
  root.left = reConstructBinaryTree(preLeft, vinLeft);
  root.right = reConstructBinaryTree(preRight, vinRight);
  return root;
}
module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length <= 0 && inorder.length <= 0) {
    return;
  }
  let temp = preorder[0];
  let index = inorder.indexOf(temp);
  let preLeft = preorder.slice(1, index + 1),
    preRight = preorder.slice(index + 1);
  let inorderLeft = inorder.slice(0, index),
    inorderRight = inorder.slice(index + 1);
  let root = {
      val:temp
  };
  root.left = buildTree(preLeft, inorderLeft);
  root.right = buildTree(preRight, inorderRight);
  return root;
};