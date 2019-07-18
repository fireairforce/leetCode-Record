/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let path;
let stack;

function FindPath(root, expectNumber) {
    // write code here
    if (root === null) {
        return [];
    }
    path = [];
    stack = [];
    cal(root, expectNumber)
    return path;
}

function cal(root, expectNumber) {
   stack.push(root.val);
   if(root.val === expectNumber && root.left === null && root.right=== null){
       path.push(stack.slice(0));
   } else {
       if(root.left!==null){
           cal(root.left,expectNumber-root.val);
       } 
       if(root.right!==null){
           cal(root.right,expectNumber-root.val);
       }
   }
   stack.pop();
}
module.exports = {
    FindPath: FindPath
};