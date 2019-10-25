/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 *  要么t和s相等,要么t是s的左子树，要么t是s的右子树
 */

var isSubtree = function(s, t) {
  if (!s || !t) {
    return false;
  }
  //   判断两个树是否相同
  if (isSameTree(s, t)) {
    return true;
  }
  //   判断t是否和s的左子树相同,判断t是否和s的右子树相同
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

// 用来判断两棵树是不是相同的函数
const isSameTree = (s, t) => {
  if (s === null) {
    return t === null;
  }
  if (t === null) {
    return s === null;
  }
  if (s.val !== t.val) {
    return false;
  }
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
};
