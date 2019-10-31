/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }
    return isSample(root.left, root.right);
};

isSample = (left, right) => {
    if(left === null) {
        return right === null;
    }
    if(right === null) {
        return left === null;
    }
     if (left.val !== right.val) {
        return false;
    }
    return isSample(left.left,right.right) && isSample(left.right,right.left);
}