/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
//  输入一个链表，输出链表中的倒数第k个节点
//  解法是搞两个指针在头部的位置，然后让一个指针移动到第k个节点的位置，使两根指针的距离为k，然后同时移动两根指针，知道后面那根指针碰到底部的时候前面那个指针到达的地方就是第 k 个节点

//  解法2使用数组去存节点，然后返回数组的倒数第k个值就行了
function FindKthToTail(head, k) {
    // write code here
    // if (head === null || k <= 0) return null;
    // let p1 = head;
    // let p2 = head;
    // for (let i = 0; i < k - 1; i++) {
    //     if (p1.next) {
    //         p1 = p1.next;
    //     } else {
    //         return null;
    //     }
    // }
    // while (p1.next) {
    //     p1 = p1.next;
    //     p2 = p2.next;
    // }
     
    // return p2;
    if(head===null) return false;
    let arr = [];
    while(head){
        arr.push(head);
        head = head.next;
    }
    return k>arr.length?false:arr[arr.length - k];
}
module.exports = {
    FindKthToTail: FindKthToTail
};