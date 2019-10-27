/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//  中序遍历的话使用递归的话很快就可以完成(二叉树的遍历用递归都很快)
// 如果是非递归的遍历的话，使用stack即可
var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const stack = [root];
  const ret = [];
  let left = root.left;
  //   stack中弹出的当前项
  let item = null;
  while (left) {
    stack.push(left);
    left = left.left;
  }
  while (item = stack.pop()) {
      ret.push(item.val);
      let t = item.right;
      while(t) {
          stack.push(t);
          t = t.left;
      }
  }
  return ret;
};
