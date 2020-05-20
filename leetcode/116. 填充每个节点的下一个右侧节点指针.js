/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root
  }
  let queue = [root]
  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let temp = queue.shift()
      if (i < sz - 1) {
        temp.next = queue[0]
      }
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
  }
  return root
}
