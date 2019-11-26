/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(!pRoot){
        return true;
    }
    return Math.abs(depth(pRoot.left) - depth(pRoot.right)) <= 1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}

const depth = (root) => {
    if(!root){
        return 0;
    }
    return 1 + Math.max(depth(root.left),depth(root.right));
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};