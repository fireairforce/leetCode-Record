/*function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
    // write code here
    // pre为前序遍历，vin为后序遍历
    if (pre.length === 0) {
        return null;
    }
    var node = {
        val:pre[0]
    }
    for (var i = 0; i < vin.length; i++) {
        //  由前序遍历的首个元素就是根节点，由根节点来分割中序遍历的左右子树。
        if (pre[0] === vin[i]) {
            // slice方法截取的时候是不会考虑end参数的= = 
            //  对二叉树的左边子树进行一个递归的排序
            node.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
            //  对二叉树的右边子树进行一个递归的排序
            node.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));
        }
    }
    return node;
}
module.exports = {
    reConstructBinaryTree: reConstructBinaryTree
};