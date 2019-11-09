var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  let ret = [];
  let res = [root];
  let left = root.left;
  //   先把根的左节点全部入栈
  while (left) {
    res.push(left);
    left = left.left;
  }
  let item;
  //   然后把左的推出来,然后搞右边的子树
  while ((item = res.pop())) {
    ret.push(item.val);
    let t = item.right;
    while (t) {
      res.push(t);
      t = t.left;
    }
  }
  return ret;
};
