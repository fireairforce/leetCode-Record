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
// 找一根指针从头开始如果有相同的，把相同的跳过即可
// 这里返回head是为了防止头指针丢失，后来的操作使用临时指针来完成
var deleteDuplicates = function(head) {
    if(!head || !head.next) {
        return head;
    }    
    let p1 = head;
    while(p1.next && p1) {
        if(p1.val === p1.next.val) {
            p1.next = p1.next.next;
        } else {
            p1 = p1.next;
        }
    }
    return head;
};