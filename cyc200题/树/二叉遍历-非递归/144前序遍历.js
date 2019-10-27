var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const ret = [];
  const stack = [root];
  let t = stack.pop();
  while(t) {
      ret.push(t.val);
      if(t.right) {
          stack.push(t.right);
      }
      if(t.left) {
        stack.push(t.left);
      }
      t = stack.pop();
  }
  return ret;
};
