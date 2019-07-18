/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 先对二叉搜索树进行一个中序遍历(中序遍历的顺序是左根右，然后把中序遍历取出来的值放到数组里面去就行了)
//思路：二叉搜索树按照中序遍历的顺序打印出来正好就是排序好的顺序。
//  所以，按照中序遍历顺序找到第k个结点就是结果。
function KthNode(pRoot, k) {
    // write code here
    if(!pRoot){
        return pRoot;
    }
    var arr = [];
    // 二叉树中序遍历
    function MidInorder(root){
        if(root.left!==null){
           MidInorder(root.left);
        }
        arr.push(root);
        if(root.right!==null){
            MidInorder(root.right);
        }
    }
    MidInorder(pRoot);
    return arr[k-1];
}
module.exports = {
    KthNode: KthNode
};