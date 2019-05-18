function Node(x){
   this.val = x ;
   this.next = null;
}
function reverseList(pHead){
    if(!pHead||!pHead.next){
        return null;
    } 
    let pre = pHead;
    let next = pHead.next;
    let r = null;
    pHead.next;
    while(pHead){
      r = next.next;
      next.next = pre;
      pre = next;
      next = r;
    }
    return pre;
}