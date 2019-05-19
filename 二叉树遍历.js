// 递归版本
// 后续遍历
function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function TailInorder(root){
    if(root){
        TailInorder(root.left);
        TailInorder(root.right)
        console.log(root.val)        
    }
}
// 中序遍历
function MidInorder(root){
    if(root.left!==null){
        MidInorder(root.left);
    }
    if(root.right!==null){
        MidInorder(root.right);
    }
}