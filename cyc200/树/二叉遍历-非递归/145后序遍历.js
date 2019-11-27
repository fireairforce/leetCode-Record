var postorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  let res = [];
  let stack = [root];
  let p = root;
  while (stack.length) {
    let top = stack[stack.length - 1];
    if (top.left === p || top.right === p || (!top.left && !top.right)) {
      p = stack.pop();
      res.push(p.val);
    } else {
      top.right && stack.push(top.right);
      top.left && stack.push(top.left);
    }
  }
  return res;
};
