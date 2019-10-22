/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let min = [], max = [];
    let temp = head;
    while(temp){
        if(temp.val<x) {
            min.push(temp.val);
        } else {
            max.push(temp.val);
        }
        temp = temp.next;
    }
    temp = head;
    for(let i = 0;i<min.length;i++) {
        temp.val = min[i];
        temp = temp.next;
    } 
    for(let i = 0;i<max.length;i++) {
        temp.val = max[i];
        temp = temp.next;
    }
    return head;
};