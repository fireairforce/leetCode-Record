/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) {
    return null;
  }
  let sum = 0;
  let stack = [root];
  let right = root.right;
  while(right) {
      stack.push(right);
      right = right.right;
  }  
  let item;
  while(item = stack.pop()) {
      item.val += sum;
      sum = item.val;
      let t = item.left;
      while(t) {
          stack.push(t);
          t = t.right;
      }
  }
  return root;
};

