// 递归版本
function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function visit(root){
    if(root){
        visit(root.left);
        visit(root.right)
        console.log(root.val)        
    }
}