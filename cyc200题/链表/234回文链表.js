/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) {
        return true;
    }
    let p1 = head,p2 = head.next ;
    while(p2 !== null && p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    // 如果这是个偶数节点就让p1指向下面一个节点
    if(p2!==null) {
        p1 = p1.next;
    }
    cut(head,p1);
    // head现在是前面那一段链表,p1是后面那一段链表
    return isEqual(head,reverseList(p1));
};

// 把链表砍成两段判断一下就可了
const cut = (head, cutNode) => {
  while (head.next !== cutNode) {
    head = head.next;
  }
  head.next = null;
};

const reverseList = (head) => {
  let newHead;
  if (!head) {
    return null;
  }
  while (head) {
    let temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }
  return newHead;
};

const isEqual = (l1, l2) => {
  while (l1 && l2) {
    if (l1.val !== l2.val) {
      return false;
    } else {
      l1 = l1.next;
      l2 = l2.next;
    }
  }
  return true;
};
