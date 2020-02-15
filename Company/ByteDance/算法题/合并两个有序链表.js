// 面试的时候尽量不要写递归
const mergeList = (l1,l2) => {
   let newHead = new ListNode(-1);
   let cur = newHead;
   while(l1 && l2){
       if(l1.val < l2.val) {
           cur.next = l1;
           cur = cur.next;
           l1 = l1.next;
       } else {
           cur.next = l2;
           cur = cur.next;
           l2 = l2.next;
       }
   }
   if(!l1){
       cur.next = l2;
   }
   if(!l2){
       cur.next = l1;
   }
   return newHead.next;
}