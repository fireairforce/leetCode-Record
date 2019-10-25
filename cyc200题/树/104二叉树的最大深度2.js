var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  let depth = 1;
  let stack = [root];
  let currentNode = root;
  while (stack.length) {
    while (getNotChild(currentNode)) {
      stack.push(getNotChild(currentNode));
      currentNode = getNotChild(currentNode);
      currentNode.ok = true;
      if (stack.length > depth) {
        depth = stack.length;
      }
    }
    stack.pop();
    currentNode = stack[stack.length - 1];
  }
  return depth;
};

function getNotChild(root) {
  if (root.left && !root.left.ok) {
    return root.left;
  }
  if (root.right && !root.right.ok) {
    return root.right;
  }
  return null;
}
