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
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let stack = [root]
  let res = []
  while (stack.length) {
    let temp = []
    let tempRes = []
    for (let i = 0; i < stack.length; i++) {
      tempRes.push(stack[i].val)
      stack[i].left && temp.push(stack[i].left)
      stack[i].right && temp.push(stack[i].right)
    }
    res.push(tempRes)
    stack = temp
  }
  return res
}
