// function ListNode(x){
//     this.val = x;
//     this.next = null;
// }
function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 === null) {
        return pHead2;
    }
    if (pHead2 === null) {
        return pHead1;
    }
    //  递归版本
    if(pHead1.val<=pHead2.val){
        pHead1.next = Merge(pHead1.next,pHead2);
        return pHead1;
    } else {
        pHead2.next = Merge(pHead1,pHead2.next);
        return pHead2;
    }
}
module.exports = {
    Merge: Merge
};