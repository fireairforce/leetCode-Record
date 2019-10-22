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
/*
这题本质的解法是搞两根指针，一根指针用于指向奇数节点，一根用于偶数节点，然后把两条链表连在一起
*/
var oddEvenList = function(head) {
    if(head === null) {
        return head;
    }
    // head为奇数链表的头,odd为尾节点
    // even是偶数链表的尾节点,evenHead为偶链表的头结点
    let odd = head,even = head.next,evenHead = even;
    while(even !==null && even.next !== null) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};