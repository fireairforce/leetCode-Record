var postorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const ret = [];
  const stack = [root];
  //   用来判断节点是否应该出栈
  let p = root;
  while(stack.length > 0) {
    const top = stack[stack.length - 1];
    if(top.left === p || top.right === p || (top.left === null && top.right === null)) {
        p =stack.pop();
        ret.push(p.val);
    } else {
        if(top.right) {
            stack.push(top.right);
        } 
        if(top.left) {
            stack.push(top.left);
        }
    }
  }
  return ret;
};
