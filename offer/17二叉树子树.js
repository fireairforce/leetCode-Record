/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function JudgeSubTree(root1, root2) {
    if (root2 === null) return true;
    if (root1 === null) return false;
    if (root2.val === root1.val) {
        return JudgeSubTree(root1.left, root2.left) && JudgeSubTree(root1.right, root2.right);
    } else return false;
}

function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if (pRoot1 === null || pRoot2 === null) return false;
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2) || JudgeSubTree(pRoot1, pRoot2);
}
module.exports = {
    HasSubtree: HasSubtree
};