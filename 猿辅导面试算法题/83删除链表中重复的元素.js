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
    let p = head;
    while(p.next && p) {
        if(p.val === p.next.val){
           p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};