/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 其实这个地方也是利用两根链表的长度在做文章，a链表到了访问完了，再从b链表开始访问，
// b链表访问完成后，从a链表开始，最后两者要么null，要么节点处相遇
var getIntersectionNode = function(headA, headB) {
    let pa = headA, pb = headB;
    if(pa===null || pb === null) {
        return null;
    } 
    while(pa!==pb) {
        pa = ( pa === null ? headB : pa.next );
        pb = ( pb === null ? headA : pb.next );
    }
    return pa;
};