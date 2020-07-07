function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}
/**
* @param {number[]} pre
* @param {number[]} post
* @return {TreeNode}
*/
var constructFromPrePost = function(pre, post) {
if (pre.length <= 0 || post.length <= 0) {
    return null;
}
let len = pre.length
let first = pre[0]
let index = post.indexOf(pre[1])
let rightPre = pre.slice(index + 2, len)
let leftPre = pre.slice(1, index + 2)
let rightPost = post.slice(index + 1, len - 1)
let leftPost = post.slice(0, index + 1)
let root = new TreeNode(first)
root.left = constructFromPrePost(leftPre, leftPost)
root.right = constructFromPrePost(rightPre, rightPost)
return root;
};