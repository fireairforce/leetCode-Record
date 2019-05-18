/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 翻转链表，并输出链表的表头,非递归
function ReverseList(pHead) {
    // write code here
    if(pHead === null || pHead.next===null){
        return pHead;
    }
    let r = null;
    let pre = pHead;
    let next = pHead.next;
    pHead.next = null;
    while(next){
        r = next.next;
        next.next = pre;
        pre = next;
        next = r;
    }
    return pre
}
module.exports = {
    ReverseList: ReverseList
};