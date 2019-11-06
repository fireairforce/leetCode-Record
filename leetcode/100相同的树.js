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
var isSameTree = function(p, q) {
    if(!p&&!q){
        return true;
    }
    if(!p || !q){
        return false;
    }
    const result1 = qx(p);
    const result2 = qx(q); 
    if(result1.length !== result2.length){
        return false;
    }
    for(let i = 0;i<result1.length;i++){
        if(result1[i]!==result2[i]){
            return false;
        }
    }   
    return true;
};

const qx = (root) => {
    if(!root) {
        return;
    }
    let res = [];
    let stack = [root];
    let t = stack.pop();
    while(t) {
        res.push(t.val);
        t.right && stack.push(t.right);
        t.left && stack.push(t.left);
        t = stack.pop();
    }    
    return res;
}

