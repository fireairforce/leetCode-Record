
// 后序其实也是利用一个栈
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

const qx = (root) => {
  let stack = [root];
  let res = [];
  let item;
  while ((item = stack.pop())) {
    res.push(item.val);
    item.right && stack.push(item.right);
    item.left && stack.push(item.left);
  }
  return res;
};

const zx = (root) => {
  let stack = [root];
  let res = [];
  let left = root.left;
  while (left) {
    stack.push(left);
    left = left.left;
  }
  let item;
  while ((item = stack.pop())) {
    res.push(item.val);
    let right = item.right;
    while (right) {
      stack.push(right);
      right = right.left;
    }
  }
  return res;
};
