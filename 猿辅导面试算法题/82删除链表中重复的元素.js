/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let pre = new ListNode(-1);
    pre.next = head;
    // p用来存当前节点的上一个节点
    let p = pre;
    // p1用来表示当前节点
    let p1 = head;
    while(p1 && p1.next) {
        // 如果出现想用的值了
        if(p1.val === p1.next.val) {
            // 先把p1移动到相同节点的最后一个节点
            while(p1.next && p1.val === p1.next.val) {
                p1 = p1.next;
            }
            // 然后让上一个节点链接到最后一个节点的下一个节点
            p.next = p1.next;
            p1 = p1.next;
        } else {
            // 如果没出现相同值，就链接一下前一个节点(p),然后当前节点去到下一个节点
            p = p1;
            p1 = p1.next;
        }
    }
    return pre.next;
};