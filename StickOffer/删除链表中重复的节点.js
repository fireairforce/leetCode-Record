/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    if (pHead === null || pHead.next === null) {
        return pHead;
    }
    let p = pHead;
    if (pHead.val === p.next.val) {
    //  如果当前这个节点是重复的节点
        p = p.next.next;
        while (p !== null && p.val === pHead.val) {
            // 跳过值和当前值相同的所有节点,找到第一个和当前节点不同的节点
           p = p.next;
        }
        return deleteDuplication(p)
        // 从第一个与当前节点不同的节点开始递归
    } else {
        //  当前节点不是重复的节点
        p = pHead.next;
        // 保留当前节点，从下一个节点开始递归
        pHead.next = deleteDuplication(p);
        return pHead;
    }
    // write code here
}
module.exports = {
    deleteDuplication: deleteDuplication
};