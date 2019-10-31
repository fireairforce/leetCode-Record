/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let newHead = new ListNode(-1);
    newHead.next = head;
    let pre = newHead;
    for (let i = 1; i < m; i++) {
        pre = pre.next;
    }
    // head此时就在反转的那个节点上面,pre在反转的前一个节点上面
    head = pre.next;
    for (let i = m; i < n; i++) {
       let temp = head.next;
       head.next = temp.next;
       temp.next = pre.next;
       pre.next = temp;
    }
    return newHead.next;
};