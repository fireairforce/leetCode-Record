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
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sumEvenGrandparent = function(root) {
  if (!root) {
    return [];
  }
  let res = [];
  let sum = 0;
  let stack = [root];
  while (stack.length) {
    let temp = [];
    let tempRes = [];
    for (let i = 0; i < stack.length; i++) {
      tempRes.push(stack[i].val);
      let x = stack[i].val;
      if (x % 2 === 0) {
        if (stack[i].left) {
          if (stack[i].left.left) {
            sum += stack[i].left.left.val;
          }
          if (stack[i].left.right) {
            sum += stack[i].left.right.val;
          }
        }
        if (stack[i].right) {
          if (stack[i].right.left) {
            sum += stack[i].right.left.val;
          }
          if (stack[i].right.right) {
            sum += stack[i].right.right.val;
          }
        }
      }
      stack[i].left && temp.push(stack[i].left);
      stack[i].right && temp.push(stack[i].right);
    }
    stack = temp;
    res.push(tempRes);
  }
  return sum;
};
