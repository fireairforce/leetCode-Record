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
var getIntersectionNode = function(headA, headB) {
  let pa = headA,
    pb = headB;
  let la = 0,
    lb = 0;
    // 先找链表a的长度
  while (pa) {
    if (pa.next) {
      pa = pa.next;
    } else {
      break;
    }
    la++;
  }
//   b的长度
  while (pb) {
    if (pb.next) {
      pb = pb.next;
    } else {
      break;
    }
    lb++;
  }
  pa = headA;
  pb = headB;
  //   长的那根链表从长的那部分开始走起
  if (la > lb) {
      let times = la - lb;
      while(times --) {
          pa = pa.next;
      }
  } else {
      let times = lb - la;
      while(times -- ) {
          pb = pb.next;
      }
  }
  let temp = null;
  //   继续往后面走，他们要么会在焦点的地方相遇
  while(pa && pb) {
     if(pa === pb ) {
        temp = pa;
        break;
     }
     pa = pa.next;
     pb = pb.next;
  }
  return temp;
};
