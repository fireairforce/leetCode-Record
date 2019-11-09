/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

/**
 * 先开两根指针,一根快的，一根慢的，快的是慢的两倍，快的到终点时候，慢的到中点
 * 然后把中点位置的节点值作为二叉搜索树当前节点的值
 */
var sortedListToBST = function(head) {
  let root = new TreeNode();
  if (!head) {
    return head;
  }
  if (!head.next) {
    root = new TreeNode(head.val);
    return root;
  }
  let slow = head;
  let fast = head;
  //   把slow这根指正遍历到中点
  while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
  }
  let pre = slow;
  root = new TreeNode(slow.val);
  let headRight = slow.next;
  pre.next = null;
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(headRight);
  return root;
};
