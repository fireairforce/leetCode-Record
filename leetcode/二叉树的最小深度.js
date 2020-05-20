/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }
  let queue = []
  let visited = new Map()
  let step = 1;
  queue.push(root)
  while(queue.length !== 0) {
    let sz = queue.length
    for (let i = 0;i<sz;i++) {
      let cur = queue.shift()
      if (!cur.left && !cur.right) {
        return step
      }
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    step ++
  }
  return step;
};