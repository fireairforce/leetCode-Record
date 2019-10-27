/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

//  遍历后取值即可
var kthSmallest = function(root, k) {
    if(!root){
        return null;
    }
   let result = [];
   zx(root,result);
   return result[k-1];
};

const zx = (root,arr)=> {
    if(!root) {
        return;
    }
    zx(root.left, arr);
    arr.push(root.val);
    zx(root.right, arr);
}