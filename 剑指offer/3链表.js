/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var arr = [];
    while(head){
        arr.unshift(head.val);
        haed=head.next;
    }
    return arr;
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};