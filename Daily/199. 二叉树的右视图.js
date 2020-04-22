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
  if (!root) {
    return []
  }
  let queue = [root]
  let res = []
  while (queue.length !== 0) {
    let temp = []
    for (let i = 0; i < queue.length; i++) {
      if (i === queue.length - 1) {
        res.push(queue[i].val)
      }
      queue[i].left && temp.push(queue[i].left)
      queue[i].right && temp.push(queue[i].right)
    }
    queue = temp
  }
  return res
}
