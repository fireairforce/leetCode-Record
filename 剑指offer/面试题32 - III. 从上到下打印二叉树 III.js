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
  let i = 0
  while (stack.length) {
    let temp = []
    let tempRes = []
    for (let i = 0; i < stack.length; i++) {
      tempRes.push(stack[i].val)
      stack[i].left && temp.push(stack[i].left)
      stack[i].right && temp.push(stack[i].right)
    }
    if (i % 2) {
      tempRes = tempRes.reverse()
    }
    res.push(tempRes)
    stack = temp
    i++
  }
  return res
}
