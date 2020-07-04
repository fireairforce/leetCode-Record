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
var rightSideView = function (root) {
  let res = []
  if (!root) {
    return res;
  }
  let stack = [root]
  while (stack.length !== 0) {
    let sz = stack.length;
    res.push(stack[sz - 1].val)
    for (let i = 0; i < sz; i++) {
      let item = stack.shift();
      item.left && stack.push(item.left)
      item.right && stack.push(item.right)
    }
  }
  return res;
};