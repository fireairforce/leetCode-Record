/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 这个题目的思路大致就是,快慢指针先走个n圈，总会有一次在节点处相遇，相遇之后，把一个节点回到头部，然后两个节点以相同速度运行，最后相遇的地方就是环的入口
function EntryNodeOfLoop(pHead) {
    // write code here
    if (pHead == null || pHead.next == null) {
        return null;
    }
    let p1 = pHead,
        p2 = pHead;
    while (p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        // 先让两根快慢指针相遇再说,相遇之后，快指针这个时候直接回到头结点的地方
        if(p1===p2){
            p2 = pHead;
            while(p1!==p2){
                p1 = p1.next;
                p2 = p2.next;
            }
            if(p1===p2){
                return p1;
            }
        }
    }
    return null;
}
module.exports = {
    EntryNodeOfLoop: EntryNodeOfLoop
};