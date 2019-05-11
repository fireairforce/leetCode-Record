/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
    let treeArr = []
    let nums = []
    while (root || treeArr.length) {
       while(root){
           treeArr.push(root)
           root = root.left
       }
       if(treeArr.length){
           root = treeArr.pop();
           nums.push(root.val)
           root = root.right
       }
    }
    return nums
};