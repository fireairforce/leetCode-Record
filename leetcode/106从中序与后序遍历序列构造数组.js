function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 中序:左根右
// 后序:左右根
// 中和后
var buildTree = function(inorder, postorder) {
  if (!inorder.length && !postorder.length) {
    return null;
  }
  let preHeader = postorder[postorder.length - 1];
  let index = inorder.indexOf(preHeader);
  let midLeft = inorder.slice(0, index),
    midRight = inorder.slice(index + 1);
  let backLeft = postorder.slice(0, index);
  backRight = postorder.slice(index, postorder.length-1);
  let tree = new TreeNode(preHeader);
  tree.left = buildTree(midLeft, backLeft);
  tree.right = buildTree(midRight, backRight);
  return tree;
};
