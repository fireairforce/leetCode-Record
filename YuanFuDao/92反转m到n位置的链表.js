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
    for(let i = 1;i<m;i++) {
      pre = pre.next;
    }
    let Head= pre.next;
    // 初始头结点是pre,这个结点是一直不变的，当前结点是head。
    // 这个结点也是一直不变的，反转的节点就把那些节点一个个的移到这两个节点的中间即可
    for(let i = m;i<n;i++){
        let temp = Head.next;
        Head.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;   
    }
    return newHead.next;
};