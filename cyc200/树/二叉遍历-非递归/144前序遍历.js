var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  let stack = [root];
  let ret = [];
  let item;
  while ((item = stack.pop())) {
    ret.push(item.val);
    item.right && stack.push(item.right);
    item.left && stack.push(item.left);
  }
  return ret;
};
