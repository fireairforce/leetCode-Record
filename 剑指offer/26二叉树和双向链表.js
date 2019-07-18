/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//  输入一颗二叉搜索树，将二叉搜索树转换成一个排序的双向链表

/*
 1.将左子树构建成双链表，并返回链表的表头节点
 2.定位至左子树双链表的最后一个节点
 3.如果左子树链表不为空的话，将当前root追加到左子树链表
 4.将右子树构造成双链表，并返回链表头节点
 5.如果右子树链表不为空的话，将该链表追加到root节点之后
 6.根据左子树链表是否为空确定返回的节点
*/
// function Convert(root) {
//     // write code here
//     if (root === null) return null;
//     if (root.left === null && root.right === null) return root;
//     // 将左子树构造成双链表并且返回链表头节点
//     let left = Convert(root.left);
//     let p = left;
//     // 定位到左子树双链表的最后一个节点
//     while (p !== null && p.right !== null) {
//         p = p.right;
//     }
//     // 如果左子树链表不为空的话，将当前root追加到左子树链表
//     if (left) {
//         p.right = root;
//         root.left = p;
//     }
//     // 右子树构建成双链表，并返回
//     let right = Convert(root.right);
//     if (right) {
//         p.right = root;
//         root.right = right;
//     }
//     return left ? left : root;
// }
// module.exports = {
//     Convert: Convert
// };

// 非递归版本
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(root) {
    // write code here
    if(!root) {
        return null;
    }
    if(root.right === null && root.left===null) {
        return root;
    }
    let left = Convert(root.left);
    let p = left;
    while(p!==null&&p.right!==null){
        p = p.right;
    }
    if(left!==null){
        p.right = root;
        root.left = p;
    }
    let right = Convert(root.right);
    if(right){
        right.left = root;
        root.right = right;
    }
    return left!==null?left:root;
}
module.exports = {
    Convert: Convert
};