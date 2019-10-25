/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null || head.next === null) {
    return;
  }
  let slow = head,
    fast = head;
  //   先用慢指针找到链表的中点
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //   中点后的链表反转
  let needReverser = slow.next;
  slow.next = null;
  needReverser=reverseList(needReverser);
  // 插入前端的缝隙
  let cur = head;
  while(cur && needReverser) {
      let curSecond = needReverser;
      needReverser = needReverser.next;
      let nextCur = cur.next;
      curSecond.next = cur.next;
      cur.next = curSecond;
      cur = nextCur;
  }   
  return head;
};

const reverseList = (tempHead) => {
  let p1 = tempHead;
  let newHead = null;
  while (p1) {
    //  临时记录p1的下一步
    let temp = p1.next;
    // 将当前节点放到最后面去
    p1.next = newHead;
    //    新的头节点来起
    newHead = p1;
    p1 = temp;
  }
  return tempHead;
};
