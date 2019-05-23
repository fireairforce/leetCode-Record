/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(root) {
    // write code here
    if(!root) {
        return true;
    }
    return comRoot(root.left,root.right);
}
function comRoot(left,right){
    if(left === null && right === null){
        return true;
    } 
    if(left&&right){
       if(left.val === right.val){
           return comRoot(left.left,right.right)&&comRoot(left.right,right.left)
       }
    }
}
module.exports = {
    isSymmetrical: isSymmetrical
};