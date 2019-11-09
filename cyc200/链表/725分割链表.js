/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 * 还没解出来，惭愧= =
 */


var splitListToParts = function(root, k) {
  let p1 = root;
  let len = 0;
  while (p1) {
    p1 = p1.next;
    len++;
  }
  let size = Math.floor(len / k);
  let mod = len % k;
  let res = [];
  let cur = root;
  for (let i = 0; cur !== root, i < k; i++) {
    res[i] = cur;
    let curSize = size + (mod > 0 ? 1 : 0);
    for(let j = 0;j<curSize -1;j++) {
        cur = cur.next;
    }
    let next = cur.next;
    cur.next = null;
    cur = next;
  }
  return res;
};
