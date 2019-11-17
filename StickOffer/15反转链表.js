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
    let newHead;
    while(head){
        let temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }
    return newHead;
}
module.exports = {
    ReverseList: ReverseList
};