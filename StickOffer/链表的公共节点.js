/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 找出两个链表的长度，然后让长的先走两个链表的长度差，然后再一起走
function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    let arr1 = [],
        arr2 = [],
        p1 = pHead1,
        p2 = pHead2,
        index = 1;
    while (p1) {
        arr1.push(p1.val);
        p1 = p1.next;
    }
    while (p2) {
        arr2.push(p2.val);
        p2 = p2.next;
    }
    let str2 = arr2.join('-');
    for (let i = 0; i < arr1.length; i++) {
        let arr = arr1.slice(i);
        let str1 = arr.join('-');
        if (str2.indexOf(str1) > -1) {
            index = i;
            break;
        }
    }
    if (index < 0) {
        return null;
    }
    let p = pHead1;
    while (index > 0) {
        p = p.next;
        index--;
    }
    return p;

}
module.exports = {
    FindFirstCommonNode: FindFirstCommonNode
};