/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    if(!root) {
        return [];
    }
    const ret = [];
    const stack = [root];
    root.val = 0;
    let t = stack.pop();
    while(t) {
        ret.push(t.val);
        let tempVal = t.val;
        if(t.right){
            t.right.val = 2 * tempVal + 2;
            stack.push(t.right);
        } 
        if(t.left) {
            t.left.val = 2 * tempVal + 1;
            stack.push(t.left);
        }
        t = stack.pop();
    }
    this.arr = ret;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    console.log(this.arr);
    if(this.arr.indexOf(target)===-1){
        return false;
    } else {
        return true;
    }
};

// let obj = new FindElements()

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */