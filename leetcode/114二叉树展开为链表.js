/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let res = [];
  let p = root;
  let stack = [p];
  let item = null;
  while ((item = stack.pop())) {
    res.push(item.val);
    item.left && stack.push(item.left);
    item.right && stack.push(item.right);
  }
  for(let i = 0;i<res.length;i++){
      root.val = res[i];
      root.left = null;
      root = root.right;
  }
};
