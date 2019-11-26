/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    // write code here
    let arr = [];
    let p = head;
    while(p){
        arr.push(p.val);
        p = p.next;
    }
    return arr.reverse(); 
}
module.exports = {
  printListFromTailToHead: printListFromTailToHead,
};
