/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const ro = [];
    const add = (l1,l2,carry) => {
        if(l1 || l2 || carry) {
            const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
            ro.push(val%10);
            return add(l1?l1.next:nul,l2 ? l2.next : null,Math.floor(val/10));
        }
    }
    add(l1,l2,0,[]);
    return ro;
};

