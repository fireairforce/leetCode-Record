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
var zigzagLevelOrder = function(root) {
    let res = [];
    let stack = [root];
    while(stack.length){
        let tempArr = [];
        let temp = [];
        for(let i = 0;i<stack.length;i++){
            temp.push(stack[i].val);
            stack[i].left && tempArr.push(stack[i].left) 
            stack[i].right && tempArr.push(stack[i].right)         
        }
        stack = tempArr;
        res.push(temp);
    }
    for(let i = 0;i<res.length;i++){
        if(i%2!==0){
            res[i] = res[i].reverse();
        }
    }
    return res;
};