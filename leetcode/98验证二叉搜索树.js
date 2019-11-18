// 判断二叉搜索树
/*function ListNode(x){
    this.val = x;
    this.left = this.right = null;
}*/

var isValidBST = function(root) {
  // 先中序遍历，然后判断递增
  let arr = [];
  // arr存一波遍历值
  middle(root, arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
};

let middle = (root, arr) => {
  if (!root) {
    return 0;
  }
  //　左,根，右遍历
  middle(root.left, arr);
  arr.push(root.val);
  middle(root.right, arr);
};
