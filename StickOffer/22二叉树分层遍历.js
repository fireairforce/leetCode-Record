/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  // write code here
  if (!root) {
    return [];
  }
  let res = [];
  let stack = [root];
  while (stack.length) {
    let temp = [];
    for (let i = 0; i < stack.length; i++) {
      res.push(stack[i].val);
      stack[i].left && temp.push(stack[i].left);
      stack[i].right && temp.push(stack[i].right);
    }
    stack = temp;
  }
  return res;
}
module.exports = {
  PrintFromTopToBottom: PrintFromTopToBottom,
};
