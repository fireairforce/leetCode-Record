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
    head.next = deleteDuplicates(head.next);
    if(head.val === head.next.val) {
        head = head.next;
    }
    return head;
};