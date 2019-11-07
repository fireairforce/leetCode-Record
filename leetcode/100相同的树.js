/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 前序遍历来判断顺序
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  const stackP = [p];
  const stackQ = [q];
  while (stackP.length===0 || stackQ.length===0) {
    let pNode = stackP.pop();
    let qNode = stackQ.pop();
    if (pNode === null && qNode === null) {
      continue;
    }
    if(pNode === null){
        return false;
    }
    if(qNode === null) {
        return false;
    }
    if (qNode.val !== pNode.val) {
      return false;
    } else {
      stackP.push(pNode.right);
      stackQ.push(qNode.right);
      stackP.push(pNode.left);
      stackQ.push(qNode.left);
    }
  }
  return true;
};
