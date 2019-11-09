/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root){
        return [];
    }
     let stack = [root];
     let res = [];
     while (stack.length) {
       let temp = [];
       let result = [];
       for (let i = 0; i < stack.length; i++) {
           temp.push(stack[i].val);
           stack[i].left && result.push(stack[i].left);
           stack[i].right && result.push(stack[i].right);
       }
       res.push(temp);
       stack = result;
     }
     return res.reverse();
   };
   