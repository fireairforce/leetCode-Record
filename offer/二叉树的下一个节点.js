/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
// 中序遍历的顺序是左根右
function GetNext(pNode) {
    // write code here
    if(!pNode){
        return null;
    } 
    // 1节点有孩子存在，设置一个指针从节点的右孩子出发，一直沿着指向左节点的指针，找到叶子节点即为下一个节点
    if(pNode.right){
        let p = pNode.right;
        while(p.left){
            p = p.left;
        }
        return p;
    }
    // 2.该节点是父亲节点的左节点，没有右子树，则找到一个当前的节点是父亲节点左孩子的节点
    while(pNode.next){
        if(pNode===pNode.next.left){
            return pNode.next;
        }
        pNode = pNode.next;
    }
}
module.exports = {
    GetNext: GetNext
};